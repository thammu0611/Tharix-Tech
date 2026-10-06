export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  detail: string;
  outputs: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    summary: "Understand the business, users and objectives.",
    detail:
      "We start with the problem, not the solution. Stakeholder interviews, a review of how the work is done today, and a clear statement of what success would actually look like.",
    outputs: ["Problem statement", "Stakeholder map", "Success criteria"],
  },
  {
    number: "02",
    title: "Strategize",
    summary: "Define requirements, roadmap and technical direction.",
    detail:
      "Scope is agreed, sequenced and costed. Technical direction is chosen against the constraints that exist — team, budget, timeline and the systems already in place.",
    outputs: ["Scope and roadmap", "Architecture direction", "Delivery plan"],
  },
  {
    number: "03",
    title: "Design",
    summary: "Create UX flows, wireframes and polished interfaces.",
    detail:
      "Flows first, then structure, then surface. A prototype validates the important decisions before they become expensive, and a design system makes the build consistent.",
    outputs: ["User flows", "Interactive prototype", "Design system"],
  },
  {
    number: "04",
    title: "Build",
    summary: "Develop, integrate and test the product.",
    detail:
      "Short increments against a working environment. Automated tests, code review and preview deployments on every change, so progress is something you can use rather than something you are told about.",
    outputs: ["Working increments", "Automated test suite", "Preview environments"],
  },
  {
    number: "05",
    title: "Launch",
    summary: "Deploy and monitor the production system.",
    detail:
      "A staged release with monitoring, alerting and a rehearsed rollback. Launch day should be uneventful, and it usually is when the pipeline has been used a hundred times before it.",
    outputs: ["Production deployment", "Monitoring and alerts", "Runbooks"],
  },
  {
    number: "06",
    title: "Scale",
    summary: "Optimize, maintain and evolve the product.",
    detail:
      "Performance tuning, cost review, and a prioritised backlog informed by real usage. Products get better after launch or they get worse — there is no steady state.",
    outputs: ["Performance review", "Cost optimisation", "Evolution roadmap"],
  },
];
