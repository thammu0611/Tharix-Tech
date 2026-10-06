import type { IconKey } from "@/lib/icons";

export interface ServiceDetailBlock {
  title: string;
  body: string;
}

export interface Service {
  /** Two-digit index used in the editorial numbering system. */
  index: string;
  slug: string;
  title: string;
  /** Short label used in navigation and cards. */
  shortTitle: string;
  icon: IconKey;
  /** One-line positioning statement. */
  summary: string;
  /** Longer paragraph used on the service detail page hero. */
  intro: string;
  /** Bullet capabilities shown on the home page and the detail page. */
  capabilities: string[];
  /** What a client actually receives. */
  deliverables: string[];
  /** Technologies typically used for this service. */
  stack: string[];
  /** Deeper sections rendered on the service detail page. */
  detail: ServiceDetailBlock[];
  /** Questions this service answers for a business. */
  outcomes: string[];
  cta: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    index: "01",
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    icon: "code",
    summary:
      "Modern websites and scalable web applications built for performance, security and growth.",
    intro:
      "A website is usually the first piece of engineering a customer experiences. We build web platforms that load fast, rank well, stay secure under load, and remain maintainable years after launch.",
    capabilities: [
      "Performance",
      "Security",
      "Scalability",
      "Accessibility",
      "SEO",
      "Exceptional user experience",
    ],
    deliverables: [
      "Component library and design system implementation",
      "Server-rendered, SEO-ready application",
      "Content model ready for CMS integration",
      "Automated build, preview and deployment pipeline",
      "Analytics, monitoring and error reporting",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Vercel / AWS"],
    detail: [
      {
        title: "Architecture that survives growth",
        body: "We separate content, presentation and business logic from the first commit. Structured data files, typed contracts and clear component boundaries mean a new page, a new locale or a headless CMS can be added later without a rewrite.",
      },
      {
        title: "Performance as an engineering budget",
        body: "Core Web Vitals are treated as a requirement, not a report. We set budgets for payload size, hydration cost and layout shift, then hold the build to them — image optimisation, code splitting, streaming and caching are decided during architecture, not retrofitted.",
      },
      {
        title: "Accessible by construction",
        body: "Semantic markup, keyboard-operable interfaces, visible focus states and honest colour contrast are part of the definition of done. Accessibility work done at build time costs a fraction of accessibility work done after a complaint.",
      },
      {
        title: "Search visibility built in",
        body: "Server rendering, clean URL structures, per-page metadata, structured data and a correct sitemap are standard. Technical SEO is engineering work, and we treat it that way.",
      },
    ],
    outcomes: [
      "Faster pages and measurably better Core Web Vitals",
      "A codebase your team or ours can extend without fear",
      "Content your marketing team can change without a developer",
    ],
    cta: "Explore Web Development",
    metaTitle: "Web Development Services | Tharix Technologies",
    metaDescription:
      "Modern websites and scalable web applications engineered for performance, security, accessibility and search visibility. React, Next.js and TypeScript by Tharix Technologies.",
  },
  {
    index: "02",
    slug: "mobile-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Development",
    icon: "smartphone",
    summary:
      "High-quality iOS, Android and cross-platform applications with architecture that scales.",
    intro:
      "Mobile is where usage is most demanding and least forgiving. We design and build applications that feel native, behave predictably on poor networks, and are structured so that shipping the tenth feature is as calm as shipping the first.",
    capabilities: [
      "iOS",
      "Android",
      "Cross-platform delivery",
      "Offline-first behaviour",
      "Performance profiling",
      "Scalable architecture",
    ],
    deliverables: [
      "Cross-platform application with shared business logic",
      "Design system tuned to platform conventions",
      "Offline and sync strategy",
      "Push notification and deep-linking setup",
      "Store submission support and release pipeline",
    ],
    stack: ["React Native", "Flutter", "TypeScript", "Node.js", "Firebase", "REST / GraphQL"],
    detail: [
      {
        title: "Native feel, shared engineering",
        body: "Cross-platform is a delivery decision, not a compromise. We respect platform conventions — navigation patterns, gestures, typography, haptics — while keeping business logic in one place, so two apps do not drift into two products.",
      },
      {
        title: "Built for real networks",
        body: "We design for the connection users actually have. Optimistic updates, local persistence, background sync and clear offline states keep the application usable when the signal is not.",
      },
      {
        title: "Release engineering",
        body: "Versioning, staged rollouts, crash reporting and over-the-air updates where appropriate. A release should be a routine event, not a risk.",
      },
      {
        title: "Measured, not assumed",
        body: "Startup time, frame rate, memory and bundle size are profiled on mid-range devices, not only on flagship hardware.",
      },
    ],
    outcomes: [
      "One codebase, two platforms, consistent quality",
      "Predictable release cadence with crash visibility",
      "An app that performs on the devices your users actually own",
    ],
    cta: "Explore Mobile Development",
    metaTitle: "Mobile App Development | Tharix Technologies",
    metaDescription:
      "iOS, Android and cross-platform mobile applications engineered for performance, reliability and scale. React Native and Flutter development by Tharix Technologies.",
  },
  {
    index: "03",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    icon: "palette",
    summary:
      "Research-led product design that makes complex systems feel obvious to use.",
    intro:
      "Good design is not decoration applied at the end. It is the process of deciding what the product does, in what order, and how a person understands it. We design interfaces that reduce the number of decisions a user has to make.",
    capabilities: [
      "UX research",
      "User flows",
      "Wireframes",
      "Prototyping",
      "UI design",
      "Design systems",
      "Usability improvements",
    ],
    deliverables: [
      "Research synthesis and problem framing",
      "Information architecture and user flows",
      "Low- and high-fidelity wireframes",
      "Interactive prototype for validation",
      "Production-ready design system with tokens and components",
    ],
    stack: ["Figma", "Design tokens", "Storybook", "Accessibility audits", "Usability testing"],
    detail: [
      {
        title: "Research before pixels",
        body: "We start with the people who will use the product and the business outcome it has to produce. Stakeholder interviews, task analysis and a review of existing behaviour tell us where the real friction is — which is rarely where it is assumed to be.",
      },
      {
        title: "Systems, not screens",
        body: "We deliver a design system — tokens, type scale, spacing, components, states — so the twentieth screen is consistent with the first and engineering has an unambiguous contract to build against.",
      },
      {
        title: "Prototypes that answer questions",
        body: "A prototype exists to settle an argument cheaply. We build the smallest interactive artefact that can validate a flow before it becomes code.",
      },
      {
        title: "Design for the whole state machine",
        body: "Empty, loading, partial, error and success states are designed alongside the happy path. Most of the perceived quality of a product lives in those states.",
      },
    ],
    outcomes: [
      "Fewer support requests caused by confusing interfaces",
      "A shared visual language across every product surface",
      "Design decisions grounded in evidence, not taste alone",
    ],
    cta: "Explore UI/UX Design",
    metaTitle: "UI/UX Design Services | Tharix Technologies",
    metaDescription:
      "UX research, user flows, prototyping, interface design and design systems. Research-led product design from Tharix Technologies.",
  },
  {
    index: "04",
    slug: "ai-ml",
    title: "AI & Machine Learning",
    shortTitle: "AI & Machine Learning",
    icon: "brain",
    summary:
      "Applied intelligence — automation, prediction and decision support that earns its place in the product.",
    intro:
      "We treat AI as an engineering capability, not a category to be seen in. Every model we ship is tied to a measurable business decision, has a defined fallback, and is evaluated against a baseline before it reaches production.",
    capabilities: [
      "Artificial intelligence integration",
      "Machine learning models",
      "Predictive analytics",
      "Process automation",
      "Recommendation systems",
      "Data-driven decision systems",
    ],
    deliverables: [
      "Feasibility assessment against a measurable baseline",
      "Data pipeline and feature engineering",
      "Model training, evaluation and versioning",
      "Inference service with monitoring and fallbacks",
      "Human review workflow where decisions carry risk",
    ],
    stack: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Vector databases", "LLM APIs"],
    detail: [
      {
        title: "Start with the decision",
        body: "Before any model, we identify the decision being made today, who makes it, how often, and what it costs when it is wrong. If a rule-based system answers that better than a model, we say so.",
      },
      {
        title: "Data readiness comes first",
        body: "Most AI projects fail on data, not algorithms. We assess volume, quality, labelling and access early, and are direct about what is not yet possible with the data available.",
      },
      {
        title: "Evaluation before deployment",
        body: "Offline metrics, held-out validation and an honest baseline comparison. A model that cannot beat a simple heuristic does not ship.",
      },
      {
        title: "Safety, fallback and oversight",
        body: "Confidence thresholds, graceful degradation, audit trails and human-in-the-loop review for high-impact decisions. Intelligent systems still need an off switch.",
      },
    ],
    outcomes: [
      "Automation of repetitive, high-volume decisions",
      "Predictions your team can inspect and trust",
      "A clear answer on whether AI is the right tool at all",
    ],
    cta: "Explore AI Solutions",
    metaTitle: "AI & Machine Learning Development | Tharix Technologies",
    metaDescription:
      "Applied AI and machine learning — predictive analytics, automation, recommendation systems and decision support, engineered and evaluated by Tharix Technologies.",
  },
  {
    index: "05",
    slug: "custom-software",
    title: "Custom Software",
    shortTitle: "Custom Software",
    icon: "blocks",
    summary:
      "Purpose-built systems designed around how your business actually operates.",
    intro:
      "When off-the-shelf software forces a business to change how it works, the cost shows up as workarounds, spreadsheets and manual reconciliation. Custom software removes that tax by fitting the process instead of fighting it.",
    capabilities: [
      "Business management systems",
      "Internal tools",
      "SaaS platforms",
      "Enterprise applications",
      "Workflow automation",
      "Custom dashboards",
    ],
    deliverables: [
      "Domain model and process mapping",
      "Role-based access and permissions",
      "Integrations with existing systems",
      "Reporting and operational dashboards",
      "Migration plan from current tooling",
    ],
    stack: ["Next.js", "Node.js", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    detail: [
      {
        title: "Map the process before modelling the data",
        body: "We sit with the people doing the work. The system that results reflects the real workflow, including the exceptions everyone knows about and no vendor tool accounts for.",
      },
      {
        title: "Integrate rather than replace",
        body: "Accounting, CRM, payments and logistics systems usually stay. We build around them with well-defined interfaces so the new system augments the estate instead of duplicating it.",
      },
      {
        title: "Built for the people who use it daily",
        body: "Internal tools deserve the same design attention as customer-facing products. Keyboard-first flows, bulk actions and sensible defaults are what make adoption happen.",
      },
      {
        title: "Ownership, documented",
        body: "You own the code, the schema and the deployment. Architecture decisions, runbooks and handover documentation are part of delivery.",
      },
    ],
    outcomes: [
      "Manual, spreadsheet-driven processes replaced by a single system",
      "Operational visibility your team currently has to assemble by hand",
      "Software that fits your business instead of the other way round",
    ],
    cta: "Explore Custom Software",
    metaTitle: "Custom Software Development | Tharix Technologies",
    metaDescription:
      "Purpose-built business systems, internal tools, SaaS platforms and workflow automation designed around your operations by Tharix Technologies.",
  },
  {
    index: "06",
    slug: "cloud-backend",
    title: "Cloud & Backend",
    shortTitle: "Cloud & Backend",
    icon: "cloud",
    summary:
      "The infrastructure layer — APIs, data, deployment and monitoring done properly.",
    intro:
      "Backend work is invisible when it is right and catastrophic when it is not. We build the services, data models and infrastructure that let a product stay online, stay fast and stay affordable as it grows.",
    capabilities: [
      "Backend systems",
      "APIs",
      "Database architecture",
      "Cloud infrastructure",
      "Authentication",
      "DevOps",
      "Deployment",
      "Monitoring",
    ],
    deliverables: [
      "Documented API surface with versioning strategy",
      "Normalised schema with migration tooling",
      "Infrastructure as code",
      "CI/CD with automated tests and staged environments",
      "Logging, metrics, tracing and alerting",
    ],
    stack: ["Node.js", "Python", "Java", "Spring Boot", "PostgreSQL", "AWS", "Azure", "GCP", "Docker"],
    detail: [
      {
        title: "APIs as products",
        body: "Consistent conventions, predictable errors, versioning and real documentation. An API that other teams can adopt without a meeting is a strategic asset.",
      },
      {
        title: "Data modelling that ages well",
        body: "Constraints in the database, migrations in version control, and a schema that reflects the domain rather than the first screen someone designed.",
      },
      {
        title: "Infrastructure you can reproduce",
        body: "Environments defined as code, provisioned identically, and destroyable without ceremony. Cost visibility is set up on day one, not after the first surprising invoice.",
      },
      {
        title: "Observability before incidents",
        body: "Structured logs, metrics, traces and meaningful alerts. When something breaks, the question should be answerable in minutes.",
      },
    ],
    outcomes: [
      "Predictable uptime with alerting that reaches a human",
      "Deployment that takes minutes and does not require a specialist",
      "Infrastructure cost you can explain line by line",
    ],
    cta: "Explore Cloud & Backend",
    metaTitle: "Cloud & Backend Engineering | Tharix Technologies",
    metaDescription:
      "APIs, database architecture, cloud infrastructure, DevOps, deployment and monitoring engineered for reliability by Tharix Technologies.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const serviceSlugs = services.map((s) => s.slug);
