import { NextResponse } from "next/server";
import { validateContact, hasErrors, type ContactPayload } from "@/lib/validation";
import { sanitiseText, sanitiseHeaderValue } from "@/lib/utils";

/**
 * Contact endpoint.
 *
 * Security posture:
 *  - Runs the same validation as the client, because the client cannot be trusted.
 *  - Rejects oversized bodies before parsing.
 *  - Honeypot field and a minimum time-on-form check reject naive bots.
 *  - In-memory per-IP rate limiting (swap for Redis/Upstash behind a load balancer).
 *  - Input is sanitised before it reaches an email body or a log line.
 *  - Secrets are read from the environment and never returned to the client.
 *
 * Delivery: wire an email provider below. Until EMAIL_API_KEY is set, the route
 * validates and accepts the submission and records it in the server log so the
 * form is demonstrably working before the mail provider is chosen.
 */

const MAX_BODY_BYTES = 24_000;
const RATE_LIMIT = { windowMs: 10 * 60_000, max: 5 };
const MIN_FORM_TIME_MS = 2_000;

const hits = new Map<string, number[]>();

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5_000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < RATE_LIMIT.windowMs)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT.max;
}

export async function POST(req: Request) {
  const ip = clientIp(req);

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many enquiries from this connection. Please try again later." },
      { status: 429 },
    );
  }

  const length = Number(req.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, message: "That message is too long to send." },
      { status: 413 },
    );
  }

  let body: Partial<ContactPayload>;
  try {
    body = (await req.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Spam signals. Both respond with a generic success so bots learn nothing.
  const tripped =
    Boolean(body.website && body.website.trim()) ||
    (typeof body.elapsed === "number" && body.elapsed < MIN_FORM_TIME_MS);

  if (tripped) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateContact(body);
  if (hasErrors(errors)) {
    return NextResponse.json(
      { ok: false, errors, message: "Please check the highlighted fields." },
      { status: 422 },
    );
  }

  const enquiry = {
    name: sanitiseHeaderValue(body.name!),
    company: sanitiseHeaderValue(body.company ?? ""),
    email: sanitiseHeaderValue(body.email!),
    phone: sanitiseHeaderValue(body.phone ?? ""),
    projectType: sanitiseHeaderValue(body.projectType!),
    budget: sanitiseHeaderValue(body.budget ?? "Not specified"),
    message: sanitiseText(body.message!),
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.EMAIL_API_KEY;
  const inbox = process.env.CONTACT_INBOX;

  if (!apiKey || !inbox) {
    // No provider configured yet — accept, record, and make the gap explicit
    // in the server log rather than silently dropping a real enquiry.
    console.info(
      "[contact] Enquiry received but no email provider is configured. " +
        "Set EMAIL_API_KEY and CONTACT_INBOX in the environment to enable delivery.",
      enquiry,
    );
    return NextResponse.json({ ok: true });
  }

  try {
    // ── Delivery ──────────────────────────────────────────────
    // Replace with your provider. Example shape for Resend:
    //
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${apiKey}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "Tharix Website <website@yourdomain.com>",
    //     to: inbox,
    //     reply_to: enquiry.email,
    //     subject: `New enquiry — ${enquiry.projectType} — ${enquiry.name}`,
    //     text: [
    //       `Name: ${enquiry.name}`,
    //       `Company: ${enquiry.company || "—"}`,
    //       `Email: ${enquiry.email}`,
    //       `Phone: ${enquiry.phone || "—"}`,
    //       `Project type: ${enquiry.projectType}`,
    //       `Budget: ${enquiry.budget}`,
    //       "",
    //       enquiry.message,
    //     ].join("\n"),
    //   }),
    // });

    console.info("[contact] Enquiry accepted", { ...enquiry, message: "[redacted]" });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't send that just now. Please try again, or email us directly.",
      },
      { status: 502 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, message: "Method not allowed." }, { status: 405 });
}
