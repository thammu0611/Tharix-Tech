import type { IconKey } from "@/lib/icons";

/* ── Statistics ────────────────────────────────────────────────
   These are editable sample figures. They are presented on the site
   as company indicators, not as audited claims, and the `note` field
   makes the basis of each one explicit. Update the values here.
   ──────────────────────────────────────────────────────────── */

export interface Stat {
  value: number | null;
  /** Rendered verbatim when `value` is null (e.g. "24/7"). */
  display?: string;
  suffix?: string;
  label: string;
  note: string;
}

export const stats: Stat[] = [
  {
    value: 10,
    suffix: "+",
    label: "Projects Delivered",
    note: "Sample figure — update in src/data/company.ts",
  },
  {
    value: 5,
    suffix: "+",
    label: "Technology Domains",
    note: "Web, mobile, AI/ML, cloud, custom software",
  },
  {
    value: 10,
    suffix: "+",
    label: "Digital Solutions",
    note: "Sample figure — update in src/data/company.ts",
  },
  {
    value: null,
    display: "24/7",
    label: "Technical Support",
    note: "Support coverage is defined per engagement",
  },
];

/* ── Differentiators ─────────────────────────────────────────── */

export interface Differentiator {
  number: string;
  title: string;
  body: string;
  icon: IconKey;
}

export const differentiators: Differentiator[] = [
  {
    number: "01",
    title: "Business First",
    body: "We understand the business problem before choosing the technology. If a smaller solution solves it, that is what we recommend.",
    icon: "target",
  },
  {
    number: "02",
    title: "Engineering Excellence",
    body: "Scalable, maintainable, reliable software. Tests, review and documentation are part of delivery, not an optional extra.",
    icon: "gauge",
  },
  {
    number: "03",
    title: "Design Driven",
    body: "We design around real users and real needs, including the states most teams skip — empty, loading, partial and error.",
    icon: "palette",
  },
  {
    number: "04",
    title: "Modern Technology",
    body: "Current tools and proven engineering practice. We choose for the problem in front of us, not for the résumé.",
    icon: "layers",
  },
  {
    number: "05",
    title: "Transparent Process",
    body: "Clear communication, agreed milestones and a working environment you can open at any point in the build.",
    icon: "eye",
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    body: "We support products beyond launch — monitoring, iteration and the unglamorous maintenance that keeps software healthy.",
    icon: "handshake",
  },
];

/* ── Values ──────────────────────────────────────────────────── */

export interface Value {
  title: string;
  body: string;
}

export const values: Value[] = [
  {
    title: "Innovation",
    body: "We look for the better approach, then verify it before recommending it.",
  },
  {
    title: "Integrity",
    body: "We tell clients what we actually think, including when it costs us scope.",
  },
  {
    title: "Excellence",
    body: "Quality is a standard applied consistently, not an effort made occasionally.",
  },
  {
    title: "Customer Focus",
    body: "The measure of our work is what it does for the client's business.",
  },
  {
    title: "Continuous Learning",
    body: "Technology moves. Staying current is part of the job, not a side project.",
  },
  {
    title: "Ownership",
    body: "We take responsibility for outcomes, not just for the tickets we were given.",
  },
];

/* ── Approach pillars (About page) ───────────────────────────── */

export const approachPillars = [
  {
    label: "Strategy",
    body: "Framing the problem, defining success and sequencing the work so value arrives early.",
  },
  {
    label: "Design",
    body: "Turning a problem into an interface people understand without being trained.",
  },
  {
    label: "Engineering",
    body: "Building it properly — tested, reviewed, documented and deployable on demand.",
  },
  {
    label: "Technology",
    body: "Choosing the stack that fits the constraint, then operating it responsibly.",
  },
] as const;

export const mission =
  "To make powerful technology accessible, useful and impactful for businesses of every size.";

export const vision =
  "To become a trusted technology partner for companies building the next generation of digital products.";

/**
 * Our Story — editable narrative. Replace with the verified company
 * history once it is confirmed.
 */
export const story = {
  isPlaceholder: true,
  paragraphs: [
    "Tharix Technologies was founded on a straightforward observation: most businesses do not have a technology problem, they have a translation problem. The people who understand the business rarely speak the language of software architecture, and the people who build software rarely spend enough time understanding the business.",
    "We built the company to sit in that gap. Strategy, design and engineering under one roof, working on the same problem at the same time, so nothing is lost in a handover between three vendors.",
    "We work with founders, operators and technology leaders who need a partner rather than a supplier — people who want to be told when an idea is expensive, and who want the reason.",
  ],
};
