/**
 * SAMPLE PROJECTS
 * ───────────────
 * Every entry below is a *sample* concept written to demonstrate the
 * case-study format. None of these are real client engagements and the
 * UI labels them as samples wherever they appear.
 *
 * Replace with real projects as they are approved for publication, and
 * set `isSample: false` on each one. The `results` array is intentionally
 * empty on samples — measurable results are only published when verified.
 */

export type ProjectVisual = "commerce" | "analytics" | "health" | "ops";

export interface CaseStudySection {
  number: string;
  title: string;
  body: string;
  /** Optional bullet list rendered under the body. */
  points?: string[];
}

export interface Project {
  index: string;
  slug: string;
  name: string;
  category: string;
  industry: string;
  year: string;
  summary: string;
  description: string;
  stack: string[];
  services: string[];
  visual: ProjectVisual;
  /** True until the entry is replaced with a real, approved engagement. */
  isSample: boolean;
  featured: boolean;
  /** The twelve-part case study narrative. */
  sections: CaseStudySection[];
  /** Only populated once results have been measured and approved for publication. */
  results: Array<{ metric: string; label: string; note?: string }>;
  metaTitle: string;
  metaDescription: string;
}

export const projects: Project[] = [
  {
    index: "01",
    slug: "tharix-commerce",
    name: "Tharix Commerce",
    category: "E-Commerce Platform",
    industry: "Retail & E-Commerce",
    year: "2026",
    summary:
      "A scalable e-commerce platform focused on performance, usability and seamless digital commerce.",
    description:
      "A composable storefront and operations layer for a growing multi-category retailer, designed around catalogue scale, fast browsing and a checkout that does not lose people.",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    services: ["UI/UX Design", "Web Development", "Cloud & Backend"],
    visual: "commerce",
    isSample: true,
    featured: true,
    sections: [
      {
        number: "01",
        title: "Overview",
        body: "A retailer with a wide catalogue and a growing direct-to-consumer channel needed a storefront that could hold tens of thousands of SKUs without slowing down, plus an operations layer their merchandising team could run without engineering help.",
      },
      {
        number: "02",
        title: "The Challenge",
        body: "Catalogue growth had outpaced the platform. Category pages were slow, search returned poor matches, and every merchandising change required a developer. Checkout abandonment was the visible symptom; the cause was distributed across search, page weight and a confusing multi-step payment flow.",
        points: [
          "Category pages degraded sharply beyond a few hundred products",
          "Merchandising changes were gated behind a deployment",
          "Checkout collected information the business did not need",
        ],
      },
      {
        number: "03",
        title: "Research",
        body: "We instrumented the existing funnel, ran moderated sessions with returning and first-time buyers, and interviewed the merchandising and fulfilment teams. The buyer research and the internal interviews pointed at the same fault line: the system was optimised for cataloguing, not for finding.",
      },
      {
        number: "04",
        title: "Strategy",
        body: "Separate the storefront from the commerce engine. Move product data behind a typed API, render category and product pages on the server with aggressive caching, and give merchandising a direct interface into ranking and promotion rules. Rebuild checkout as a single, resumable flow.",
      },
      {
        number: "05",
        title: "UX/UI Design",
        body: "The design work concentrated on browse and decide. Faceted filtering was redesigned to be understandable at a glance, product pages were restructured around the three questions buyers actually asked, and a design system was produced so seasonal campaigns could be built without new components.",
        points: [
          "Task flows for browse, compare, checkout and reorder",
          "Wireframes tested against a clickable prototype",
          "Design system with tokens, states and responsive rules",
        ],
      },
      {
        number: "06",
        title: "Technology",
        body: "A Next.js storefront reading from a Node.js commerce API, with PostgreSQL as the system of record and Redis for session, cart and read-through caching. Search runs on a dedicated index rebuilt on catalogue change. Everything is deployed as infrastructure as code.",
      },
      {
        number: "07",
        title: "Development",
        body: "Delivery ran in two-week increments against a working staging environment. Contract-first API design let storefront and services progress in parallel. Every pull request produced a preview deployment with its own seeded data.",
      },
      {
        number: "08",
        title: "Challenges",
        body: "Two problems dominated: keeping cached category pages correct while inventory changed constantly, and migrating live order history without downtime.",
      },
      {
        number: "09",
        title: "Solution",
        body: "Cache invalidation was moved to event-driven tag purging, so a stock change invalidates only the pages that reference that product. The migration ran as a dual-write with reconciliation, then a cutover with a verified rollback path.",
      },
      {
        number: "10",
        title: "Results",
        body: "This is a sample project, so no performance figures are published. Real engagements report measured results here — with the measurement method stated — once the client has approved their release.",
      },
      {
        number: "11",
        title: "Final Product",
        body: "A storefront that stays fast as the catalogue grows, a merchandising interface the commercial team operates directly, and a checkout that asks for what is needed and nothing more.",
      },
      {
        number: "12",
        title: "Technology Stack",
        body: "React, Next.js, TypeScript, Node.js, PostgreSQL, Redis and AWS, deployed through an automated pipeline with staged environments and full observability.",
      },
    ],
    results: [],
    metaTitle: "Tharix Commerce — E-Commerce Platform Case Study",
    metaDescription:
      "A sample case study showing how Tharix Technologies approaches a scalable e-commerce platform: research, design system, composable architecture and checkout redesign.",
  },
  {
    index: "02",
    slug: "insight-ai",
    name: "Insight AI",
    category: "AI Analytics Platform",
    industry: "SaaS & Analytics",
    year: "2026",
    summary:
      "An intelligent analytics platform designed to turn complex business data into actionable insights.",
    description:
      "A decision-support platform that consolidates operational data, surfaces anomalies before they become incidents, and explains why it flagged what it flagged.",
    stack: ["Python", "PyTorch", "FastAPI", "React", "PostgreSQL", "Docker"],
    services: ["AI & Machine Learning", "UI/UX Design", "Cloud & Backend"],
    visual: "analytics",
    isSample: true,
    featured: true,
    sections: [
      {
        number: "01",
        title: "Overview",
        body: "An operations team was making daily decisions from a dozen dashboards and a shared spreadsheet. The brief was not 'add AI' — it was 'help us notice the thing that matters before the customer does'.",
      },
      {
        number: "02",
        title: "The Challenge",
        body: "Data existed but was fragmented, inconsistently defined and reviewed too late. Alerting was threshold-based and so noisy that it was routinely ignored. Any model built on this foundation would inherit the same problems.",
      },
      {
        number: "03",
        title: "Research",
        body: "We shadowed the operations team for a full cycle and catalogued every decision made, its inputs, its frequency and its cost when wrong. Fourteen recurring decisions were identified; four had enough signal and enough impact to justify a model.",
      },
      {
        number: "04",
        title: "Strategy",
        body: "Fix the data contract first, then automate. A unified metric layer with single definitions, then anomaly detection on the four qualifying decisions, then explanation surfaces so analysts could see why a flag was raised and disagree with it.",
      },
      {
        number: "05",
        title: "UX/UI Design",
        body: "The interface was designed for scanning, not exploring — an operations lead has minutes, not hours. Severity, trend and recommended action sit above the fold; the underlying series, contributing factors and model confidence are one interaction away.",
        points: [
          "Triage-first information hierarchy",
          "Explanation panel showing contributing signals",
          "Explicit confidence and data-freshness indicators",
        ],
      },
      {
        number: "06",
        title: "Technology",
        body: "Ingestion and feature pipelines in Python, models trained in PyTorch and served through FastAPI with versioned artefacts, a React front end, and PostgreSQL for the metric layer. Every prediction is stored with its inputs for audit.",
      },
      {
        number: "07",
        title: "Development",
        body: "Data engineering and interface work ran concurrently against a fixed schema contract. Models were evaluated offline against a naive baseline before any of them were exposed in the product.",
      },
      {
        number: "08",
        title: "Challenges",
        body: "Seasonality made naive anomaly detection unusable, and early alert volume was high enough to reproduce the original alert-fatigue problem in a new interface.",
      },
      {
        number: "09",
        title: "Solution",
        body: "Seasonal decomposition removed predictable variation before scoring. Alerts were grouped by root signal rather than by symptom, and a feedback control let analysts mark a flag as expected — which fed back into threshold calibration.",
      },
      {
        number: "10",
        title: "Results",
        body: "This is a sample project. Model performance and operational impact are only published for real engagements, alongside the evaluation method and the baseline they are measured against.",
      },
      {
        number: "11",
        title: "Final Product",
        body: "A single operational view with explainable anomaly detection, model confidence shown honestly, and a feedback loop that improves calibration through ordinary daily use.",
      },
      {
        number: "12",
        title: "Technology Stack",
        body: "Python, PyTorch, FastAPI, React, TypeScript, PostgreSQL and Docker, with model versioning, prediction audit logging and drift monitoring.",
      },
    ],
    results: [],
    metaTitle: "Insight AI — AI Analytics Platform Case Study",
    metaDescription:
      "A sample case study showing Tharix Technologies' approach to applied machine learning: decision mapping, data contracts, explainable anomaly detection and honest evaluation.",
  },
  {
    index: "03",
    slug: "tharix-health",
    name: "Tharix Health",
    category: "Healthcare Mobile Application",
    industry: "Healthcare",
    year: "2026",
    summary:
      "A user-focused healthcare application designed around accessibility and seamless digital interaction.",
    description:
      "A patient-facing mobile application for appointments, records and care communication, designed for a user base with a very wide range of ability and connectivity.",
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Azure"],
    services: ["UI/UX Design", "Mobile Development", "Cloud & Backend"],
    visual: "health",
    isSample: true,
    featured: true,
    sections: [
      {
        number: "01",
        title: "Overview",
        body: "A care provider needed to move appointment booking, record access and pre-visit preparation into a mobile application without excluding the substantial share of patients who are older, less confident with technology, or on unreliable connections.",
      },
      {
        number: "02",
        title: "The Challenge",
        body: "Healthcare interfaces fail in a specific way: they are designed for the clinically literate. The existing portal used clinical vocabulary, assumed a stable connection, and had no accessible path through booking for screen-reader users.",
      },
      {
        number: "03",
        title: "Research",
        body: "Sessions were run with patients across a wide age and ability range, including screen-reader and large-text users, and with front-desk staff who absorbed the failures of the current system through phone calls.",
      },
      {
        number: "04",
        title: "Strategy",
        body: "Design for the least confident user and everyone else benefits. Plain language throughout, one primary action per screen, offline-readable records, and accessibility treated as a delivery requirement with defined acceptance criteria.",
      },
      {
        number: "05",
        title: "UX/UI Design",
        body: "Type scale and touch targets were set from accessibility requirements rather than aesthetics, then the visual system was built within those constraints. Every flow was validated with assistive technology before it was built.",
        points: [
          "Plain-language content model reviewed with clinical staff",
          "WCAG 2.2 AA contrast and target-size compliance",
          "Full keyboard and screen-reader traversal of booking",
        ],
      },
      {
        number: "06",
        title: "Technology",
        body: "React Native with a shared TypeScript domain layer, a Node.js API, PostgreSQL with row-level access control, and Azure hosting selected for the provider's existing compliance posture.",
      },
      {
        number: "07",
        title: "Development",
        body: "Accessibility checks ran in the pipeline alongside unit and integration tests. Release candidates were tested on low-end devices and throttled networks as standard, not as an afterthought.",
      },
      {
        number: "08",
        title: "Challenges",
        body: "Records had to be readable offline while remaining protected, and appointment availability had to stay accurate across a system that could go offline mid-booking.",
      },
      {
        number: "09",
        title: "Solution",
        body: "Encrypted local storage with device-level authentication for offline records, and a short-lived slot reservation model that releases automatically if the booking is not completed — so no patient sees availability that no longer exists.",
      },
      {
        number: "10",
        title: "Results",
        body: "This is a sample project. Adoption, accessibility audit outcomes and support-volume impact are published only for real engagements, with their measurement basis stated.",
      },
      {
        number: "11",
        title: "Final Product",
        body: "An application that a confident user finishes in under a minute and a first-time user can complete without assistance, with records that remain readable when the network is not.",
      },
      {
        number: "12",
        title: "Technology Stack",
        body: "React Native, TypeScript, Node.js, PostgreSQL and Azure, with encrypted local persistence, audit logging and automated accessibility testing.",
      },
    ],
    results: [],
    metaTitle: "Tharix Health — Healthcare Mobile App Case Study",
    metaDescription:
      "A sample case study showing accessibility-led healthcare mobile design and engineering by Tharix Technologies: research, plain language, offline records and WCAG compliance.",
  },
  {
    index: "04",
    slug: "flowops",
    name: "FlowOps",
    category: "Business Management Platform",
    industry: "Logistics & Operations",
    year: "2026",
    summary:
      "A centralized platform designed to simplify business workflows and operational management.",
    description:
      "An internal operations platform replacing a decade of spreadsheets, email threads and disconnected tools with one system that reflects how the business actually runs.",
    stack: ["Next.js", "Java", "Spring Boot", "PostgreSQL", "Docker", "GCP"],
    services: ["Custom Software", "UI/UX Design", "Cloud & Backend"],
    visual: "ops",
    isSample: true,
    featured: true,
    sections: [
      {
        number: "01",
        title: "Overview",
        body: "An operations business coordinated work across four teams using shared spreadsheets, email and a legacy scheduling tool. The cost was not the tooling — it was the daily reconciliation work required to know the current state of anything.",
      },
      {
        number: "02",
        title: "The Challenge",
        body: "No single source of truth. The same job existed under different identifiers in three systems, status was communicated verbally, and reporting was assembled by hand every week from exports.",
      },
      {
        number: "03",
        title: "Research",
        body: "We mapped the real process, including every exception. Twenty-three distinct handoffs were documented, eleven of which existed only as informal convention and appeared in no system or document.",
      },
      {
        number: "04",
        title: "Strategy",
        body: "Model the domain around the job, not around the departments. One canonical record, explicit state transitions, role-based views onto the same data, and integrations that keep finance and customer systems in place rather than replacing them.",
      },
      {
        number: "05",
        title: "UX/UI Design",
        body: "Designed for operators who live in the tool for eight hours a day: keyboard-first navigation, dense but legible tables, bulk actions and defaults derived from actual usage patterns rather than assumptions.",
        points: [
          "Role-specific views over a single canonical record",
          "Keyboard-first interaction model with bulk operations",
          "Operational dashboards replacing manual weekly reporting",
        ],
      },
      {
        number: "06",
        title: "Technology",
        body: "A Next.js interface over a Spring Boot service layer with PostgreSQL, containerised and deployed on GCP. State transitions are enforced in the domain layer, not the interface, so no integration can put a job into an invalid state.",
      },
      {
        number: "07",
        title: "Development",
        body: "Delivered department by department, each running in parallel with the old process until the team chose to switch. Migration tooling was written before feature work so real data was present from the first demonstration.",
      },
      {
        number: "08",
        title: "Challenges",
        body: "Ten years of inconsistent spreadsheet data had to be reconciled, and adoption had to survive teams who were reasonably attached to a process they knew worked.",
      },
      {
        number: "09",
        title: "Solution",
        body: "A migration pipeline with a manual review queue for ambiguous records, and a rollout sequenced so each team saw the system solve a problem they had personally complained about before they were asked to move to it.",
      },
      {
        number: "10",
        title: "Results",
        body: "This is a sample project. Cycle-time, error-rate and reporting-effort figures are published only for real engagements, with the before-and-after measurement method stated.",
      },
      {
        number: "11",
        title: "Final Product",
        body: "One system where the state of any job is unambiguous, reporting is generated rather than assembled, and new process rules can be added without a code change.",
      },
      {
        number: "12",
        title: "Technology Stack",
        body: "Next.js, TypeScript, Java, Spring Boot, PostgreSQL, Docker and Google Cloud, with role-based access control, an audit trail and automated data migration tooling.",
      },
    ],
    results: [],
    metaTitle: "FlowOps — Business Management Platform Case Study",
    metaDescription:
      "A sample case study showing how Tharix Technologies replaces spreadsheet-driven operations with a single custom platform: process mapping, domain modelling and staged rollout.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectSlugs = projects.map((p) => p.slug);
export const featuredProjects = projects.filter((p) => p.featured);
