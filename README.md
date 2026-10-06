# Tharix Technologies — corporate website

> Engineering Digital Experiences for the Future.

A production-ready marketing and case-study site for Tharix Technologies, built
with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion and
Lucide.

---

## Quick start

```bash
npm install
cp .env.example .env.local     # then fill in the values
npm run dev                    # http://localhost:3000
```

| Script              | What it does                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Development server                                                   |
| `npm run build`     | Production build (type-checks as part of the build)                  |
| `npm run start`     | Serve the production build                                           |
| `npm run lint`      | ESLint, including the React Compiler rule set                        |
| `npm run typecheck` | TypeScript only                                                      |
| `npm run audit`     | Crawls every route in both themes at nine widths (see **QA** below)  |

Deploy to Vercel, or anywhere that runs a Node server. Set
`NEXT_PUBLIC_SITE_URL` in the production environment — canonical URLs, the
sitemap and Open Graph tags are derived from it.

---

## Editing content

**No business content lives inside a component.** Everything is in `src/data`,
typed, and ready to be swapped for a CMS, REST or GraphQL source later.

| File                       | Contains                                                        |
| -------------------------- | --------------------------------------------------------------- |
| `src/data/site.ts`         | Company name, tagline, contact details, social URLs             |
| `src/data/navigation.ts`   | Primary nav and footer link groups                              |
| `src/data/services.ts`     | The six service areas and their full detail pages               |
| `src/data/projects.ts`     | Case studies (twelve-part structure)                            |
| `src/data/technologies.ts` | The technology grid                                             |
| `src/data/industries.ts`   | Industry cells                                                  |
| `src/data/process.ts`      | The six-stage delivery process                                  |
| `src/data/company.ts`      | Statistics, differentiators, values, mission, vision, story     |
| `src/data/team.ts`         | Team profiles                                                   |
| `src/data/testimonials.ts` | Client testimonials                                             |
| `src/data/faq.ts`          | FAQ entries                                                     |
| `src/data/careers.ts`      | Open roles, benefits, culture, hiring process                   |
| `src/data/posts.ts`        | Insights articles                                               |
| `src/data/legal.ts`        | Privacy policy and terms                                        |

### Honesty model — read this before launch

The site is built so it can never imply something is verified when it is not.
Four mechanisms enforce that, and each one is visible in the UI until you turn
it off:

1. **Contact details carry a `status` flag.** In `src/data/site.ts` each field
   is `"confirmed"` or `"placeholder"`. Placeholders are rendered as clearly
   marked and are never turned into a `mailto:` or `tel:` link. The email,
   phone and domain supplied in the brief are currently marked
   `"placeholder"` — flip them to `"confirmed"` once they are live.
2. **Social URLs are configuration.** Unconfirmed profiles render as disabled,
   dashed placeholders with a note, not as dead links.
3. **Projects are marked as samples.** Every entry in `src/data/projects.ts`
   has `isSample: true` and a `results: []` array. The UI badges them as
   samples and shows an honest empty state in the Results section. Publish
   measured results only when they are verified and the client has approved
   them — and state the measurement method.
4. **Team and testimonials are never invented.** `src/data/team.ts` holds role
   placeholders with no names, photographs or biographies.
   `src/data/testimonials.ts` is deliberately empty; the section renders an
   empty state rather than fabricated praise. Only entries with
   `approved: true` are shown.

The legal documents in `src/data/legal.ts` are a plain-English template, not
legal advice. Have them reviewed before launch.

### Launch checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain
- [ ] Confirm email, phone and domain in `src/data/site.ts`, set `status: "confirmed"`
- [ ] Add real social URLs and set them to `"confirmed"`
- [ ] Replace sample projects, or remove them
- [ ] Add real team names, photos and profile links; set `isPlaceholder: false`
- [ ] Update the statistics in `src/data/company.ts` to verified numbers
- [ ] Configure `EMAIL_API_KEY` and `CONTACT_INBOX`, and wire the provider in
      `src/app/api/contact/route.ts`
- [ ] Add spam protection keys if you are using Turnstile / hCaptcha
- [ ] Have `src/data/legal.ts` reviewed by a lawyer
- [ ] Re-run `npm run audit`

---

## Architecture

```
src/
├── app/                     # App Router — one folder per route
│   ├── api/contact/         # Contact endpoint: validation, rate limit, spam checks
│   ├── opengraph-image.tsx  # Generated social card (also used for Twitter)
│   ├── icon.tsx             # Generated favicon
│   ├── sitemap.ts robots.ts # Generated from the data layer
│   └── …                    # about, services, work, solutions, careers, blog, contact, legal
├── components/
│   ├── layout/              # PageHeader, Footer, LegalDocument, Providers
│   ├── navigation/          # Navbar, MobileMenu, ThemeToggle, ScrollProgress, BackToTop, StickyMobileCTA
│   ├── sections/            # Home-page and shared page sections
│   ├── cards/               # Service, Project, Industry, Team, Job, Article, Testimonial
│   ├── forms/               # ContactForm
│   ├── visuals/             # Generated SVG artwork — hero schematic, project mockups, post covers
│   └── ui/                  # Button, Container, Section, SectionHeading, Reveal, Counter, Accordion, States, Logo, Icon
├── data/                    # All business content (see table above)
├── hooks/                   # use-theme, use-media-query, use-scroll-state
├── lib/                     # seo, validation, icons, utils
└── styles/globals.css       # Design tokens, liquid-glass material, typography scale
```

### Design system

Everything is driven by tokens in `src/styles/globals.css`:

- **Palette** — charcoal and off-white with a single electric blue used only
  for signal: calls to action, links, active state, key figures. Light and
  dark are authored separately; dark is not an inversion.
- **Typography** — Plus Jakarta Sans for everything, JetBrains Mono for the
  micro-labels and technical annotations. Both self-hosted via Fontsource, so
  there is no third-party font request and no build-time network dependency.
- **Liquid glass** — a layered material (`.glass`, `.glass-rim`,
  `.glass-specular-track`), not a blur filter: a tinted body, a refractive
  specular rim, and a grounding shadow. It is used on chrome and floating
  surfaces only — navigation, theme toggle, the drawer, the hero panel, form
  card, sticky CTA. Content sections stay flat and typographic. There is an
  opaque fallback for browsers without `backdrop-filter`.
- **Blueprint grid** — the recurring structural motif (`.blueprint`,
  `.blueprint-fine`, `.tick`), plus bracketed mono section numbering.

### Accessibility

Semantic landmarks, one `<h1>` per page, a skip link, visible focus rings,
labelled form fields with inline error messaging, a focus-trapped mobile
drawer with Escape-to-close, `aria-live` regions on async state, and
`aria-label`s on every icon-only control.

Reduced motion is handled in one place: `<MotionConfig reducedMotion="user">`
in `src/components/layout/Providers.tsx`, plus a global CSS rule. Components
deliberately do **not** branch their markup on `useReducedMotion()` — doing so
produces a hydration mismatch for exactly the users the branch was meant to
help.

### Performance

Static generation for every page (35 routes prerendered), server components by
default with client components only where interaction demands them,
self-hosted variable fonts, no image requests at all — every visual is
generated SVG — and no third-party scripts.

### Security

Security headers in `next.config.ts`. The contact endpoint validates on the
server with the same rules as the client, enforces a body-size cap, rate-limits
per IP, and uses a honeypot field plus a minimum time-on-form check. Secrets
are read from the environment and never sent to the browser. For a
multi-instance deployment, swap the in-memory rate limiter for Redis.

---

## QA

`npm run audit` starts nothing itself — run a production server first:

```bash
npm run build
npm run start -- -p 3210 &
npm run audit
```

It crawls all 28 public routes in **both themes** at **320 / 375 / 390 / 430 /
768 / 1024 / 1280 / 1440 / 1920 px** and reports HTTP status, console and page
errors, horizontal overflow (with the offending element), missing title,
description, canonical, `og:title` and `twitter:card`, heading structure,
images without `alt`, unlabelled `role="img"` SVGs, and links or buttons
without an accessible name.

Set `AUDIT_BASE` to point at another origin, and `CHROMIUM_PATH` if Playwright
cannot find a browser.

---

© 2026 Tharix Technologies. Built with technology. Designed for impact.
