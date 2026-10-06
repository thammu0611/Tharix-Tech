/**
 * TEAM — PLACEHOLDER RECORDS
 * ──────────────────────────
 * No real names, photographs or biographies are invented here. Each
 * record is an editable placeholder describing the role only, and the
 * UI labels the section as awaiting verified information.
 *
 * To publish: replace `name`, `bio` and `linkedin`, add a photo path to
 * `photo`, and set `isPlaceholder: false`.
 */

export interface TeamMember {
  id: string;
  /** Empty until a real name is supplied. */
  name: string;
  role: string;
  /** Two-letter monogram shown in place of a photograph. */
  monogram: string;
  focus: string;
  /** Role description — not a personal biography. */
  bio: string;
  photo?: string;
  linkedin?: string;
  isPlaceholder: boolean;
}

export const team: TeamMember[] = [
  {
    id: "founder-ceo",
    name: "",
    role: "Founder & CEO",
    monogram: "01",
    focus: "Strategy · Client partnership",
    bio: "Sets company direction, owns client relationships and makes sure every engagement is framed around a business outcome before a line of code is written.",
    isPlaceholder: true,
  },
  {
    id: "cto",
    name: "",
    role: "Chief Technology Officer",
    monogram: "02",
    focus: "Architecture · Engineering standards",
    bio: "Owns technical direction, architecture review and the engineering standards that keep delivery consistent across projects.",
    isPlaceholder: true,
  },
  {
    id: "lead-engineer",
    name: "",
    role: "Lead Software Engineer",
    monogram: "03",
    focus: "Delivery · Code quality",
    bio: "Leads implementation, runs code review, and turns architectural intent into a codebase the next engineer can read.",
    isPlaceholder: true,
  },
  {
    id: "designer",
    name: "",
    role: "UI/UX Designer",
    monogram: "04",
    focus: "Research · Design systems",
    bio: "Runs research and interface design, and maintains the design system that keeps every product surface coherent.",
    isPlaceholder: true,
  },
  {
    id: "ml-engineer",
    name: "",
    role: "AI/ML Engineer",
    monogram: "05",
    focus: "Modelling · Evaluation",
    bio: "Assesses data readiness, builds and evaluates models against honest baselines, and takes them to production with monitoring.",
    isPlaceholder: true,
  },
  {
    id: "project-manager",
    name: "",
    role: "Project Manager",
    monogram: "06",
    focus: "Planning · Communication",
    bio: "Keeps scope, schedule and communication clear, and makes sure clients always know the current state of their project.",
    isPlaceholder: true,
  },
];
