/**
 * Central site configuration.
 *
 * Everything a non-developer might need to change lives here or in a
 * sibling file in `src/data`. Nothing in `src/components` hard-codes
 * business content.
 *
 * VERIFICATION MODEL
 * ------------------
 * Contact and social values carry a `status` flag:
 *   "confirmed"   — supplied by Tharix Technologies; safe to publish.
 *   "placeholder" — not yet supplied. The UI renders these as clearly
 *                   marked placeholders and never links them, so the
 *                   site never implies a channel is live when it isn't.
 *
 * Flip a value to "confirmed" once the real detail is in place.
 */

export type FieldStatus = "confirmed" | "placeholder";

export interface ConfigField {
  label: string;
  value: string;
  status: FieldStatus;
  href?: string;
}

export const PLACEHOLDER_NOTE =
  "Content placeholder — replace with verified company information.";

export const siteConfig = {
  name: "Tharix Technologies",
  shortName: "Tharix",
  tagline: "Engineering Digital Experiences for the Future.",
  statement:
    "We design, build and scale modern digital products that solve real business problems.",
  description:
    "Tharix Technologies is a technology company focused on designing and engineering modern digital products — web, mobile, AI, cloud and custom software for ambitious businesses.",
  locale: "en_IN",
  /** Used for canonical URLs, sitemap and Open Graph. Set NEXT_PUBLIC_SITE_URL in production. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tharixtechnologies.com",
  /** The public domain has not been confirmed yet — see `contact.website`. */
  domainStatus: "placeholder" as FieldStatus,
  foundedYear: 2026,
  disciplines: ["Engineering", "Design", "AI", "Cloud"],
} as const;

interface ContactConfig {
  company: ConfigField;
  location: ConfigField;
  email: ConfigField;
  phone: ConfigField;
  website: ConfigField;
  address: {
    locality: string;
    region: string;
    country: string;
    street: string;
    postalCode: string;
  };
  hours: string;
  responseTime: string;
}

export const contact: ContactConfig = {
  company: {
    label: "Company",
    value: "Tharix Technologies",
    status: "confirmed",
  },

  location: {
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    status: "confirmed",
  },

  email: {
    label: "Email",
    value: "tharixtechnologies@gmail.com",
    href: "mailto:tharixtechnologies@gmail.com",
    // Supplied in the brief but not yet verified as an active mailbox.
    status: "confirmed",
  },

  phone: {
    label: "Phone",
    value: "+91 9080447820",
    status: "confirmed",
  },

  website: {
    label: "Website",
    value: "tharixtechnologies.com",
    status: "confirmed",
  },

  /** Optional street address block, used in the Organization structured data. */
  address: {
    locality: "Chennai",
    region: "Tamil Nadu",
    country: "IN",
    street: "",
    postalCode: "",
  },

  hours: "Mon – Fri, 09:30 – 18:30 IST",
  responseTime: "We reply to project enquiries within one business day.",
};

export interface SocialLink {
  label: string;
  href: string;
  status: FieldStatus;
}

/** Social URLs are configuration, not content. Fill in and flip to "confirmed". */
export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/", status: "placeholder" },
  { label: "Instagram", href: "https://www.instagram.com/", status: "placeholder" },
  { label: "GitHub", href: "https://github.com/", status: "placeholder" },
  { label: "X", href: "https://x.com/", status: "placeholder" },
];

export const isLive = (field: ConfigField) => field.status === "confirmed";
