export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What services does Tharix Technologies provide?",
    answer:
      "Web development, mobile app development, UI/UX design, AI and machine learning, custom software, and cloud and backend engineering. Most engagements combine several of these — a product usually needs design, an interface, a service layer and somewhere to run.",
  },
  {
    question: "How does the development process work?",
    answer:
      "Six stages: discover, strategize, design, build, launch and scale. You get a working environment early and short delivery increments throughout, so progress is something you can open and use rather than something you are told about in a status meeting.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. Early-stage work is scoped differently — the goal is to validate quickly without accumulating architecture that blocks the next stage of growth. We are direct about which decisions can be deferred and which will be expensive to reverse.",
  },
  {
    question: "Can you build a product from scratch?",
    answer:
      "Yes. Greenfield work starts with discovery and problem framing rather than a feature list, then moves through design, architecture and staged delivery. You own the code, the schema and the infrastructure definition from day one.",
  },
  {
    question: "How much does software development cost?",
    answer:
      "Cost depends on scope, complexity, integrations and how much certainty you need before starting. Rather than quoting a range that would be meaningless without context, we run a short scoping conversation and give you a written estimate with the assumptions stated. If the budget and the scope do not meet, we say so early.",
  },
  {
    question: "How long does development take?",
    answer:
      "A focused web platform or mobile application typically runs over several months from discovery to launch; a larger custom system takes longer. We sequence work so something usable exists well before the final milestone, and we commit to a timeline only after discovery.",
  },
  {
    question: "Do you provide UI/UX design?",
    answer:
      "Yes — as a standalone service or as part of a build. That includes research, user flows, wireframes, prototyping, interface design and a production-ready design system with tokens, components and states.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Yes. Support scope, response times and coverage are agreed per engagement and written into the contract. This covers monitoring, dependency and security updates, bug fixes and continued iteration.",
  },
  {
    question: "Can you integrate AI into an existing product?",
    answer:
      "Often, yes — but we assess it honestly first. We look at the decision you want to automate, the data available to support it, and whether a model actually beats a simpler rule. If it does not, we will tell you rather than build it anyway.",
  },
  {
    question: "Can you modernize an existing application?",
    answer:
      "Yes. That usually starts with an audit of the codebase, data model, infrastructure and security posture, followed by an incremental migration plan. Full rewrites are a last resort — most systems are better modernised in place, one boundary at a time.",
  },
];
