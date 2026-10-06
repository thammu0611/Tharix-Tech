/**
 * LEGAL CONTENT — TEMPLATE
 * ────────────────────────
 * These documents are a starting structure written in plain English. They
 * are NOT legal advice and have not been reviewed by a lawyer. Have them
 * checked against the jurisdictions Tharix operates in — including India's
 * DPDP Act and, where EU or UK residents are served, the GDPR — before the
 * site goes live.
 */

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export const lastReviewed = "2026-08-31";

export const privacySections: LegalSection[] = [
  {
    heading: "What this policy covers",
    paragraphs: [
      "This policy explains what information Tharix Technologies collects through this website, why we collect it, how long we keep it, and what you can ask us to do with it.",
      "It covers the website only. Information handled inside a client project is governed by that project's contract and data processing agreement.",
    ],
  },
  {
    heading: "Information we collect",
    paragraphs: [
      "We collect only what you send us and what the website needs to function.",
    ],
    bullets: [
      "Enquiry details you submit through the contact form: name, company, email address, phone number, project type, budget range and your message.",
      "Technical information your browser sends with each request, such as IP address and user agent, used for security and rate limiting.",
      "A single browser storage entry recording your light or dark theme preference. It stays on your device and is never sent to us.",
    ],
  },
  {
    heading: "Why we use it",
    paragraphs: [
      "Enquiry details are used to respond to you and, if we work together, to set up the engagement. Technical information is used to keep the site available and to prevent abuse of the contact form.",
      "We do not sell personal information, and we do not use enquiry details for unrelated marketing.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "Enquiries are retained for as long as the conversation is active and for a reasonable period afterwards for business records. You can ask us to delete an enquiry at any time.",
    ],
  },
  {
    heading: "Who we share it with",
    paragraphs: [
      "Only the service providers needed to operate the site and deliver email — for example, our hosting provider and our transactional email provider. They act on our instructions and are not permitted to use your information for their own purposes.",
      "We will disclose information where we are legally required to do so.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "You can ask us for a copy of the information we hold about you, ask us to correct it, or ask us to delete it. Contact us using the details on the contact page and we will respond within a reasonable period.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "The site is served over HTTPS, form submissions are validated and rate-limited, and access to enquiry data is restricted to the people who need it. No system is perfectly secure, and we will tell affected people promptly if a breach occurs that puts their information at risk.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "If this policy changes materially we will update the review date shown above and, where the change affects you directly, tell you about it.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "About these terms",
    paragraphs: [
      "These terms govern your use of this website. They do not govern any engagement between Tharix Technologies and a client — that is covered by a separate signed agreement, which takes precedence over anything on this site.",
    ],
  },
  {
    heading: "Use of the site",
    paragraphs: [
      "You may read, share and reference the content on this site. You may not attempt to disrupt the service, probe it for vulnerabilities without written permission, submit automated bulk enquiries, or misrepresent yourself when contacting us.",
    ],
  },
  {
    heading: "Content and accuracy",
    paragraphs: [
      "Content on this site is provided for information. We take care to keep it accurate, but it does not constitute a commercial offer, a warranty, or professional advice on which you should rely without speaking to us.",
      "Project entries marked as samples are illustrative concepts, not client engagements. Where results are published for a real engagement, the measurement method is stated alongside them.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The design, code, written content and visual assets on this site belong to Tharix Technologies unless stated otherwise. Third-party technology names are the trademarks of their respective owners and are referenced descriptively.",
      "Ownership of work produced under a client engagement is defined in that engagement's contract.",
    ],
  },
  {
    heading: "Links to other sites",
    paragraphs: [
      "Where we link to a third-party site we do so because we think it is useful. We are not responsible for its content, availability or privacy practices.",
    ],
  },
  {
    heading: "Liability",
    paragraphs: [
      "To the extent permitted by law, Tharix Technologies is not liable for indirect or consequential loss arising from use of this website. Nothing here limits liability that cannot lawfully be limited.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of India, and the courts of Chennai, Tamil Nadu have jurisdiction over any dispute arising from them.",
    ],
  },
];
