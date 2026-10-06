export interface Technology {
  name: string;
  category: TechCategory;
  description: string;
  /** Short mono abbreviation used as the visual mark — no third-party logos. */
  mark: string;
}

export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Databases"
  | "AI / ML"
  | "Cloud";

export const techCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Mobile",
  "Databases",
  "AI / ML",
  "Cloud",
];

export const technologies: Technology[] = [
  {
    name: "React",
    category: "Frontend",
    mark: "Rc",
    description: "Component model for interfaces that stay predictable as they grow.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    mark: "Nx",
    description: "Server rendering, routing and caching for fast, indexable applications.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    mark: "Ts",
    description: "Types as a contract between teams — errors found at build, not in production.",
  },
  {
    name: "Node.js",
    category: "Backend",
    mark: "Nd",
    description: "Event-driven services with a shared language across the stack.",
  },
  {
    name: "Python",
    category: "Backend",
    mark: "Py",
    description: "Services, data pipelines and automation with a deep scientific ecosystem.",
  },
  {
    name: "Java",
    category: "Backend",
    mark: "Jv",
    description: "Long-lived enterprise systems where stability outranks novelty.",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    mark: "Sb",
    description: "Production-grade JVM services with conventions that scale across teams.",
  },
  {
    name: "React Native",
    category: "Mobile",
    mark: "Rn",
    description: "One codebase across iOS and Android without giving up native behaviour.",
  },
  {
    name: "Flutter",
    category: "Mobile",
    mark: "Fl",
    description: "Consistent, high-frame-rate interfaces where visual control matters most.",
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    mark: "Pg",
    description: "Relational integrity, strong constraints and serious query capability.",
  },
  {
    name: "MySQL",
    category: "Databases",
    mark: "My",
    description: "Widely supported relational storage for established hosting estates.",
  },
  {
    name: "MongoDB",
    category: "Databases",
    mark: "Mg",
    description: "Document storage where the shape of the data is genuinely variable.",
  },
  {
    name: "TensorFlow",
    category: "AI / ML",
    mark: "Tf",
    description: "Production model training and serving with a mature deployment path.",
  },
  {
    name: "PyTorch",
    category: "AI / ML",
    mark: "Pt",
    description: "Research-grade modelling with a straightforward route to production.",
  },
  {
    name: "Python (ML)",
    category: "AI / ML",
    mark: "Sk",
    description: "Classical models, feature engineering and evaluation against a baseline.",
  },
  {
    name: "AWS",
    category: "Cloud",
    mark: "Aw",
    description: "Broad managed services with fine-grained control over cost and scale.",
  },
  {
    name: "Microsoft Azure",
    category: "Cloud",
    mark: "Az",
    description: "Natural fit for organisations already invested in the Microsoft estate.",
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    mark: "Gc",
    description: "Strong data and machine-learning primitives with clean networking.",
  },
];
