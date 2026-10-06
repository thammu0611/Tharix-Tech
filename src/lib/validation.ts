/**
 * Shared validation used by both the client form and the API route.
 * Never trust the client — the server runs the same rules again.
 */

export const projectTypes = [
  "Website",
  "Web Application",
  "Mobile Application",
  "UI/UX Design",
  "AI/ML",
  "Custom Software",
  "Cloud / Backend",
  "Other",
] as const;

/** Budget bands are configuration. Edit freely — nothing else depends on them. */
export const budgetRanges = [
  "Not sure yet",
  "Under ₹5 lakh",
  "₹5 – 15 lakh",
  "₹15 – 40 lakh",
  "₹40 lakh +",
  "Prefer to discuss",
] as const;

export type ProjectType = (typeof projectTypes)[number];
export type BudgetRange = (typeof budgetRanges)[number];

export interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  /** Honeypot — must remain empty. Bots fill it, humans never see it. */
  website?: string;
  /** Milliseconds the form was on screen. Sub-second submissions are bots. */
  elapsed?: number;
}

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE = /^[+\d][\d\s()\-.]{6,19}$/;

export function validateContact(input: Partial<ContactPayload>): FieldErrors {
  const errors: FieldErrors = {};

  const name = (input.name ?? "").trim();
  if (!name) errors.name = "Please enter your full name.";
  else if (name.length < 2) errors.name = "That name looks too short.";
  else if (name.length > 120) errors.name = "Please keep this under 120 characters.";

  const email = (input.email ?? "").trim();
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL.test(email)) errors.email = "Please enter a valid email address.";
  else if (email.length > 200) errors.email = "That email address is too long.";

  const phone = (input.phone ?? "").trim();
  if (phone && !PHONE.test(phone))
    errors.phone = "Please enter a valid phone number, or leave this blank.";

  const company = (input.company ?? "").trim();
  if (company.length > 160) errors.company = "Please keep this under 160 characters.";

  if (!input.projectType) errors.projectType = "Please choose a project type.";
  else if (!projectTypes.includes(input.projectType as ProjectType))
    errors.projectType = "Please choose one of the listed project types.";

  if (input.budget && !budgetRanges.includes(input.budget as BudgetRange))
    errors.budget = "Please choose one of the listed budget ranges.";

  const message = (input.message ?? "").trim();
  if (!message) errors.message = "Tell us a little about the project.";
  else if (message.length < 20)
    errors.message = "A sentence or two helps us respond usefully.";
  else if (message.length > 5000)
    errors.message = "Please keep this under 5,000 characters.";

  return errors;
}

export const hasErrors = (errors: FieldErrors) => Object.keys(errors).length > 0;
