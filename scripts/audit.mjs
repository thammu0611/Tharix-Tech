/**
 * Route audit.
 *
 * Crawls every route in both themes at nine viewport widths and reports:
 *   - HTTP status
 *   - console errors / page errors
 *   - horizontal overflow (documentElement.scrollWidth > clientWidth)
 *   - missing <title>, meta description, canonical, h1
 *   - images without alt text
 *   - links with no accessible name
 *
 * Run with the production server on :3210.
 */
import { chromium } from "playwright";

const BASE = process.env.AUDIT_BASE ?? "http://localhost:3210";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/web-development",
  "/services/mobile-development",
  "/services/ui-ux-design",
  "/services/ai-ml",
  "/services/custom-software",
  "/services/cloud-backend",
  "/solutions",
  "/work",
  "/work/tharix-commerce",
  "/work/insight-ai",
  "/work/tharix-health",
  "/work/flowops",
  "/careers",
  "/blog",
  "/blog/when-ai-is-the-wrong-answer",
  "/blog/core-web-vitals-as-an-engineering-budget",
  "/blog/designing-the-states-nobody-designs",
  "/blog/cross-platform-is-a-delivery-decision",
  "/blog/cloud-cost-is-an-architecture-decision",
  "/blog/what-to-defer-when-building-an-mvp",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/this-route-does-not-exist",
];

const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920];

const problems = [];
const note = (route, kind, detail) => problems.push({ route, kind, detail });

const browser = await chromium.launch({ ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}) });

for (const theme of ["light", "dark"]) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: theme,
    deviceScaleFactor: 1,
  });

  const page = await context.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") note(page.url(), "console", msg.text().slice(0, 220));
  });
  page.on("pageerror", (err) => note(page.url(), "pageerror", String(err).slice(0, 220)));

  for (const route of routes) {
    const res = await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
    const expected = route === "/this-route-does-not-exist" ? 404 : 200;
    if (res?.status() !== expected) {
      note(route, "status", `${res?.status()} (expected ${expected})`);
    }

    // Metadata + semantics (light pass only — identical across themes)
    if (theme === "light") {
      const meta = await page.evaluate(() => ({
        title: document.title,
        description: document
          .querySelector('meta[name="description"]')
          ?.getAttribute("content"),
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
        ogTitle: document
          .querySelector('meta[property="og:title"]')
          ?.getAttribute("content"),
        twitter: document.querySelector('meta[name="twitter:card"]')?.getAttribute("content"),
        h1Count: document.querySelectorAll("h1").length,
        imagesNoAlt: [...document.querySelectorAll("img")].filter(
          (i) => !i.hasAttribute("alt"),
        ).length,
        svgNoLabel: [...document.querySelectorAll('svg[role="img"]')].filter(
          (s) => !s.getAttribute("aria-label") && !s.querySelector("title"),
        ).length,
        namelessLinks: [...document.querySelectorAll("a")].filter((a) => {
          const text = (a.innerText || "").trim();
          return !text && !a.getAttribute("aria-label") && !a.getAttribute("title");
        }).length,
        emptyButtons: [...document.querySelectorAll("button")].filter((b) => {
          const text = (b.innerText || "").trim();
          return !text && !b.getAttribute("aria-label") && !b.getAttribute("title");
        }).length,
      }));

      if (!meta.title) note(route, "seo", "missing <title>");
      if (!meta.description) note(route, "seo", "missing meta description");
      if (!meta.canonical && route !== "/this-route-does-not-exist")
        note(route, "seo", "missing canonical");
      if (!meta.ogTitle) note(route, "seo", "missing og:title");
      if (!meta.twitter) note(route, "seo", "missing twitter:card");
      if (meta.h1Count !== 1) note(route, "a11y", `${meta.h1Count} <h1> elements`);
      if (meta.imagesNoAlt) note(route, "a11y", `${meta.imagesNoAlt} img without alt`);
      if (meta.svgNoLabel) note(route, "a11y", `${meta.svgNoLabel} role=img svg unlabelled`);
      if (meta.namelessLinks) note(route, "a11y", `${meta.namelessLinks} links without a name`);
      if (meta.emptyButtons) note(route, "a11y", `${meta.emptyButtons} buttons without a name`);
    }

    // Responsive sweep
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      await page.waitForTimeout(90);
      const overflow = await page.evaluate(() => {
        const d = document.documentElement;
        return {
          scroll: d.scrollWidth,
          client: d.clientWidth,
          culprits: [...document.querySelectorAll("body *")]
            .filter((el) => {
              const r = el.getBoundingClientRect();
              return r.width > 0 && r.right > d.clientWidth + 1.5;
            })
            .slice(0, 3)
            .map((el) => `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 60)}`),
        };
      });
      if (overflow.scroll > overflow.client + 1) {
        note(
          route,
          "overflow",
          `${theme} @${width}px — ${overflow.scroll}>${overflow.client} :: ${overflow.culprits.join(" | ")}`,
        );
      }
    }
    await page.setViewportSize({ width: 1440, height: 900 });
  }

  await context.close();
}

await browser.close();

if (problems.length === 0) {
  console.log("AUDIT CLEAN — no problems found across", routes.length, "routes");
} else {
  const grouped = problems.reduce((acc, p) => {
    (acc[p.kind] ??= []).push(p);
    return acc;
  }, {});
  for (const [kind, list] of Object.entries(grouped)) {
    console.log(`\n## ${kind.toUpperCase()} (${list.length})`);
    for (const p of list.slice(0, 40)) console.log(` - ${p.route} :: ${p.detail}`);
  }
  console.log(`\nTOTAL: ${problems.length}`);
}
