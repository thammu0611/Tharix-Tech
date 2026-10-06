export type JobCategory =
  | "Software Engineering"
  | "Frontend Development"
  | "Backend Development"
  | "Mobile Development"
  | "AI/ML"
  | "UI/UX"
  | "Product Management"
  | "Sales & Business Development";

export const jobCategories: JobCategory[] = [
  "Software Engineering",
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "AI/ML",
  "UI/UX",
  "Product Management",
  "Sales & Business Development",
];

export interface Job {
  id: string;
  title: string;
  category: JobCategory;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
  experience: string;
  skills: string[];
  description: string;
  /** Roles Tharix is actively hiring for. Set false to archive without deleting. */
  open: boolean;
}

/**
 * Open positions. These are role templates for the categories Tharix
 * hires into; confirm each one before advertising it as live.
 */
export const jobs: Job[] = [
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    category: "Frontend Development",
    location: "Chennai, India · Hybrid",
    type: "Full-time",
    experience: "2–5 years",
    skills: ["React", "Next.js", "TypeScript", "CSS architecture", "Accessibility"],
    description:
      "Build product interfaces that are fast, accessible and maintainable. You will own features end to end, contribute to the design system, and care about what happens on a mid-range phone on a poor connection.",
    open: true,
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    category: "Backend Development",
    location: "Chennai, India · Hybrid",
    type: "Full-time",
    experience: "3–6 years",
    skills: ["Node.js", "Python or Java", "PostgreSQL", "API design", "Cloud infrastructure"],
    description:
      "Design and build the services and data models behind our products. You will make schema decisions that last, write APIs other teams can adopt without a meeting, and treat observability as part of the feature.",
    open: true,
  },
  {
    id: "mobile-engineer",
    title: "Mobile Engineer",
    category: "Mobile Development",
    location: "Chennai, India · Hybrid",
    type: "Full-time",
    experience: "2–5 years",
    skills: ["React Native", "TypeScript", "Native modules", "Offline sync", "Release engineering"],
    description:
      "Ship cross-platform applications that feel native on both platforms. You will profile on real devices, design for unreliable networks, and own the release pipeline.",
    open: true,
  },
  {
    id: "ml-engineer",
    title: "AI/ML Engineer",
    category: "AI/ML",
    location: "Chennai, India · Hybrid",
    type: "Full-time",
    experience: "2–5 years",
    skills: ["Python", "PyTorch or TensorFlow", "Data pipelines", "Model evaluation", "MLOps"],
    description:
      "Take machine learning from feasibility to production. You will be expected to compare against an honest baseline, say when a model is not the right tool, and monitor what you deploy.",
    open: true,
  },
  {
    id: "product-designer",
    title: "Product Designer (UI/UX)",
    category: "UI/UX",
    location: "Chennai, India · Hybrid",
    type: "Full-time",
    experience: "2–5 years",
    skills: ["User research", "Interaction design", "Design systems", "Prototyping", "Figma"],
    description:
      "Own research through to interface. You will design flows before screens, maintain the design system, and specify empty, loading and error states as carefully as the happy path.",
    open: true,
  },
  {
    id: "project-manager",
    title: "Project Manager",
    category: "Product Management",
    location: "Chennai, India · Hybrid",
    type: "Full-time",
    experience: "3–7 years",
    skills: ["Delivery planning", "Client communication", "Scope management", "Agile practice"],
    description:
      "Keep projects clear. You will own scope, schedule and client communication, and be the person who raises a risk while it is still small.",
    open: true,
  },
  {
    id: "business-development",
    title: "Business Development Manager",
    category: "Sales & Business Development",
    location: "Chennai, India · Hybrid",
    type: "Full-time",
    experience: "3–7 years",
    skills: ["Consultative selling", "Solution scoping", "Proposal writing", "Account growth"],
    description:
      "Bring in work that fits. You will qualify opportunities honestly, translate business problems into engagement shapes, and stay involved after the contract is signed.",
    open: true,
  },
  {
    id: "engineering-intern",
    title: "Software Engineering Intern",
    category: "Software Engineering",
    location: "Chennai, India · On-site",
    type: "Internship",
    experience: "Final-year students and recent graduates",
    skills: ["JavaScript or Python", "Git", "Fundamentals", "Curiosity"],
    description:
      "A structured internship on real project work with a named mentor, code review from day one, and a clear path to a full-time offer.",
    open: true,
  },
];

export const openJobs = jobs.filter((j) => j.open);

export const benefits = [
  {
    title: "Real ownership",
    body: "You own features end to end, from the decision through to what happens in production.",
  },
  {
    title: "Learning budget",
    body: "Time and budget for courses, conferences and certifications relevant to your track.",
  },
  {
    title: "Flexible hybrid",
    body: "Core collaboration hours with genuine flexibility around the rest of the day.",
  },
  {
    title: "Modern tooling",
    body: "The hardware, licences and cloud access you need to do the work well.",
  },
  {
    title: "Health cover",
    body: "Medical insurance for you and your immediate family.",
  },
  {
    title: "Structured growth",
    body: "Defined levels, honest reviews and a mentor from your first week.",
  },
];

export const culture = [
  {
    title: "We argue about the problem, not the person",
    body: "Technical disagreement is expected and welcome. It is how the better answer surfaces.",
  },
  {
    title: "Written beats verbal",
    body: "Decisions get written down. A decision nobody can find later did not really happen.",
  },
  {
    title: "Small teams, short feedback",
    body: "You will never be more than a few days from seeing your work in front of a real user.",
  },
  {
    title: "Craft is not optional",
    body: "We care how it is built, not only that it works. The two are usually the same thing.",
  },
];

export const hiringProcess = [
  {
    number: "01",
    title: "Application review",
    body: "We read every application ourselves. You will hear back either way, usually within a week.",
  },
  {
    number: "02",
    title: "Intro conversation",
    body: "Thirty minutes on what you have built, what you want next, and what we are actually like.",
  },
  {
    number: "03",
    title: "Technical discussion",
    body: "A conversation about real problems in your field. No trick puzzles, no whiteboard algorithms.",
  },
  {
    number: "04",
    title: "Practical exercise",
    body: "A scoped, paid exercise that resembles the work — reviewed the way we review production code.",
  },
  {
    number: "05",
    title: "Team conversation",
    body: "Meet the people you would work with, and ask them anything you would rather not ask a manager.",
  },
  {
    number: "06",
    title: "Offer",
    body: "A written offer with the level, expectations and growth path stated clearly.",
  },
];

export const development = [
  {
    title: "Mentorship from week one",
    body: "Every new joiner is paired with a mentor responsible for their first ninety days.",
  },
  {
    title: "Defined levels",
    body: "What each level expects is written down, so progression is a conversation about evidence.",
  },
  {
    title: "Cross-discipline exposure",
    body: "Engineers sit in on research; designers sit in on architecture. Both make better decisions for it.",
  },
  {
    title: "Internal engineering reviews",
    body: "Regular sessions where we critique our own architecture and share what did not work.",
  },
];
