export type PostCategory =
  | "AI"
  | "Software Engineering"
  | "Web Development"
  | "Mobile Development"
  | "UI/UX"
  | "Cloud"
  | "Data"
  | "Startups";

export const postCategories: PostCategory[] = [
  "AI",
  "Software Engineering",
  "Web Development",
  "Mobile Development",
  "UI/UX",
  "Cloud",
  "Data",
  "Startups",
];

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface Post {
  slug: string;
  title: string;
  category: PostCategory;
  excerpt: string;
  /** Team byline — Tharix publishes under the discipline, not invented individuals. */
  author: string;
  date: string;
  readingTime: string;
  /** Abstract cover treatment key — rendered as generated artwork, not stock photography. */
  cover: "grid" | "wave" | "orbit" | "stack" | "flow" | "pulse";
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "when-ai-is-the-wrong-answer",
    title: "When AI is the wrong answer",
    category: "AI",
    excerpt:
      "Most failed AI projects were never really AI problems. A practical test for whether a model earns its place in your product.",
    author: "Tharix Engineering",
    date: "2026-08-12",
    readingTime: "6 min read",
    cover: "pulse",
    body: [
      {
        type: "p",
        text: "The question we are asked most often is some version of 'where can we add AI?'. It is the wrong question, and answering it directly is how organisations end up with a model in production that nobody trusts and nobody can switch off.",
      },
      {
        type: "p",
        text: "A better starting point is a decision. Not a dataset, not a capability — a specific decision somebody makes, repeatedly, that costs money when it is made badly.",
      },
      { type: "h2", text: "Four questions before any model" },
      {
        type: "ul",
        items: [
          "What decision is being made today, by whom, and how often?",
          "What does it cost when that decision is wrong?",
          "What data existed at the moment the decision had to be made?",
          "What would a simple rule achieve, and can a model beat it?",
        ],
      },
      {
        type: "p",
        text: "The third question eliminates more projects than the other three combined. Teams routinely train on data that was only available after the fact — a model that predicts churn using a field populated at cancellation is not predicting anything.",
      },
      { type: "h2", text: "The baseline is not optional" },
      {
        type: "p",
        text: "Before training anything, write down what a naive approach achieves. Predict the most common class. Use last week's value. Apply the rule the operations team already uses informally. That number is your baseline, and any model that does not clearly beat it should not ship.",
      },
      {
        type: "quote",
        text: "A model that cannot beat a well-chosen heuristic is not an improvement. It is a heuristic with a maintenance burden.",
      },
      { type: "h2", text: "Where AI does earn its place" },
      {
        type: "p",
        text: "High-volume, low-stakes decisions with abundant historical data and a tolerable error rate. Routing, ranking, triage, classification, extraction from unstructured text. Cases where being right eighty-five per cent of the time is genuinely better than the status quo, and where the fifteen per cent has a safe fallback.",
      },
      {
        type: "p",
        text: "The projects that fail are the inverse: rare, high-stakes decisions with thin data and no acceptable error rate. In those cases the honest recommendation is better instrumentation and a clearer interface for the human already making the call.",
      },
      { type: "h2", text: "Build the off switch first" },
      {
        type: "p",
        text: "Every model we deploy has a confidence threshold, a defined fallback behaviour, an audit log of inputs and outputs, and a way to disable it without a deployment. If those four things are hard to build for a given feature, that is usually a signal that the feature is not ready for a model.",
      },
    ],
  },
  {
    slug: "core-web-vitals-as-an-engineering-budget",
    title: "Treating Core Web Vitals as an engineering budget",
    category: "Web Development",
    excerpt:
      "Performance is not something you measure after launch. It is a constraint you design within, with numbers agreed before the first component.",
    author: "Tharix Engineering",
    date: "2026-07-28",
    readingTime: "7 min read",
    cover: "grid",
    body: [
      {
        type: "p",
        text: "Most performance work happens too late. A site is built, a Lighthouse score comes back yellow, and a sprint is spent compressing images and deferring scripts. The improvements are real but marginal, because the expensive decisions were made months earlier in architecture.",
      },
      { type: "h2", text: "Set the budget during architecture" },
      {
        type: "p",
        text: "Before the first component, agree the numbers: total JavaScript shipped to the browser on a first visit, largest contentful paint on a mid-range device over a throttled connection, and a hard cap on cumulative layout shift. Write them down. Enforce them in the pipeline.",
      },
      {
        type: "ul",
        items: [
          "JavaScript budget for the initial route, measured after compression",
          "LCP target on representative hardware, not a developer laptop",
          "CLS ceiling, with reserved space required for every async element",
          "A build that fails when a budget is exceeded",
        ],
      },
      { type: "h2", text: "The three decisions that dominate" },
      {
        type: "p",
        text: "First: how much of the page needs to be interactive at all. Server-rendered content that never hydrates costs nothing at runtime. Second: how images are handled — dimensions, format, and whether the browser is told the size before the file arrives. Third: fonts, which are the most common cause of both layout shift and delayed text rendering.",
      },
      {
        type: "quote",
        text: "Layout shift is almost never a mystery. It is an element that arrived without reserved space.",
      },
      { type: "h2", text: "Measure the device your users have" },
      {
        type: "p",
        text: "A build that scores ninety-eight on a developer machine can be unusable on a four-year-old mid-range phone. Test on throttled CPU and network by default. It changes which optimisations you bother with, and usually reveals that the bottleneck is script execution rather than payload size.",
      },
      { type: "h2", text: "Keep the budget after launch" },
      {
        type: "p",
        text: "Performance regresses one small addition at a time — an analytics tag here, a chat widget there. Continuous measurement in the pipeline, with the budget as a failing condition, is the only thing that holds the line over a year.",
      },
    ],
  },
  {
    slug: "designing-the-states-nobody-designs",
    title: "Designing the states nobody designs",
    category: "UI/UX",
    excerpt:
      "Empty, loading, partial and error states are where perceived quality actually lives — and where most design work stops.",
    author: "Tharix Design",
    date: "2026-07-09",
    readingTime: "5 min read",
    cover: "stack",
    body: [
      {
        type: "p",
        text: "Open almost any design file and you will find beautiful screens full of plausible data. Then look for the screen a user sees on their first day, before any data exists. It is usually missing, and it is the screen that decides whether they come back.",
      },
      { type: "h2", text: "Four states, always" },
      {
        type: "ul",
        items: [
          "Empty — nothing exists yet, and the user needs to know what to do",
          "Loading — something is happening, and the layout should not jump when it finishes",
          "Partial — some of it worked, some of it did not, and the difference must be visible",
          "Error — something failed, and the user needs to know whether it was their fault and what to do next",
        ],
      },
      {
        type: "p",
        text: "The empty state is the most valuable and the most neglected. It is the only screen guaranteed to be seen by every new user, and it is the best onboarding surface a product has — it can explain the concept in context rather than in a modal.",
      },
      { type: "h2", text: "Loading should not lie" },
      {
        type: "p",
        text: "Skeletons work when they match the shape of what arrives. When they do not, they produce a small jolt of layout shift that reads as sloppiness even when the user cannot articulate why. If the final layout is genuinely unpredictable, a plain, stable spinner is more honest.",
      },
      { type: "h2", text: "Error messages are copy, not decoration" },
      {
        type: "p",
        text: "An error message has three jobs: say what happened in plain language, say whether the user can fix it, and say what to do next. 'Something went wrong' does none of them. Errors deserve the same writing attention as the marketing headline, and get about a hundredth of it.",
      },
      {
        type: "quote",
        text: "Users forgive failure. They do not forgive being left unsure whether something failed.",
      },
    ],
  },
  {
    slug: "cross-platform-is-a-delivery-decision",
    title: "Cross-platform is a delivery decision, not a compromise",
    category: "Mobile Development",
    excerpt:
      "How to choose between native and cross-platform without the argument becoming ideological.",
    author: "Tharix Engineering",
    date: "2026-06-21",
    readingTime: "6 min read",
    cover: "flow",
    body: [
      {
        type: "p",
        text: "The native-versus-cross-platform debate usually generates more heat than insight, because both sides are arguing from a general position about a specific product. The useful version of the question is narrower: what does this application actually do with the device?",
      },
      { type: "h2", text: "Where native still wins clearly" },
      {
        type: "ul",
        items: [
          "Sustained heavy graphics or real-time media processing",
          "Deep platform integration — widgets, complications, extensions, background processing",
          "Tight coupling to hardware such as Bluetooth peripherals or camera pipelines",
          "Products where a few milliseconds of interaction latency is a competitive factor",
        ],
      },
      {
        type: "p",
        text: "Outside that list — which is most business applications — cross-platform delivers equivalent quality for meaningfully less cost, and the saved effort is better spent on the parts users actually notice.",
      },
      { type: "h2", text: "The real risk is drift" },
      {
        type: "p",
        text: "Cross-platform fails when teams treat 'one codebase' as 'one design'. Navigation conventions, typography, haptics and system integration differ between platforms for good reasons. Share the business logic and the data layer; let the surface respect the platform.",
      },
      {
        type: "quote",
        text: "Users do not know or care what framework you used. They know when a screen behaves in a way their phone does not.",
      },
      { type: "h2", text: "Profile on the device your users own" },
      {
        type: "p",
        text: "Most cross-platform performance complaints trace back to testing exclusively on flagship hardware. Set a mid-range reference device at the start of the project, profile against it every release, and the framework question becomes far less interesting.",
      },
    ],
  },
  {
    slug: "cloud-cost-is-an-architecture-decision",
    title: "Cloud cost is an architecture decision",
    category: "Cloud",
    excerpt:
      "The bill is not an operations problem. It is a consequence of choices made at the whiteboard, and it is much cheaper to fix there.",
    author: "Tharix Engineering",
    date: "2026-06-03",
    readingTime: "5 min read",
    cover: "orbit",
    body: [
      {
        type: "p",
        text: "Cloud spend usually becomes visible in the same way: a finance conversation, three months after launch, about an invoice nobody can fully explain. By then the shape of the bill is largely fixed, because it was determined by architecture rather than by configuration.",
      },
      { type: "h2", text: "The four line items that dominate" },
      {
        type: "ul",
        items: [
          "Data egress — moving bytes out, especially across regions or clouds",
          "Always-on compute sized for a peak that occurs twice a day",
          "Managed database instances provisioned for headroom nobody measured",
          "Log and metric retention configured once and never revisited",
        ],
      },
      {
        type: "p",
        text: "None of these are fixed by choosing a cheaper provider. They are fixed by deciding where data lives, what genuinely needs to be always-on, and how long observability data is worth keeping.",
      },
      { type: "h2", text: "Tag everything from day one" },
      {
        type: "p",
        text: "Cost allocation tags applied at provisioning time cost nothing. Applied retroactively across a live estate, they are a project. The ability to answer 'which feature costs what' is the difference between an informed trade-off and a blanket instruction to reduce spend by twenty per cent.",
      },
      { type: "h2", text: "Set the alarm before the invoice" },
      {
        type: "p",
        text: "Budget alerts with real thresholds, reviewed monthly, catch the runaway job in days rather than at the end of the billing cycle. It is the single highest-return hour of infrastructure work available.",
      },
    ],
  },
  {
    slug: "what-to-defer-when-building-an-mvp",
    title: "What to defer when you are building an MVP",
    category: "Startups",
    excerpt:
      "Some shortcuts cost a week to reverse. Others cost a rewrite. Knowing which is which is most of early-stage architecture.",
    author: "Tharix Engineering",
    date: "2026-05-19",
    readingTime: "6 min read",
    cover: "wave",
    body: [
      {
        type: "p",
        text: "Early-stage advice tends to collapse into 'move fast' or 'build it properly', neither of which is actionable. The useful distinction is reversibility: how expensive is this decision to undo once you have real users and real data?",
      },
      { type: "h2", text: "Safe to defer" },
      {
        type: "ul",
        items: [
          "Comprehensive test coverage outside the money paths",
          "Microservices — a well-structured monolith is faster and easier to split later",
          "Advanced caching before you have measured what is slow",
          "Multi-region deployment, custom admin tooling, and most automation",
          "Design polish on screens that may not survive the first month of feedback",
        ],
      },
      { type: "h2", text: "Expensive to reverse" },
      {
        type: "ul",
        items: [
          "The data model — everything else is built on it and migrations get harder every week",
          "Authentication and permissions, especially if tenancy is involved",
          "Anything touching money or personal data, where errors are not merely bugs",
          "The public API surface, once a third party depends on it",
          "Basic observability — without it you cannot debug the incident you are about to have",
        ],
      },
      {
        type: "quote",
        text: "Move fast on the things you can undo. Be deliberate about the things you cannot.",
      },
      { type: "h2", text: "Write down what you skipped" },
      {
        type: "p",
        text: "Deferred decisions become invisible within weeks. A short, maintained list of known shortcuts — what was skipped, why, and what would trigger revisiting it — converts technical debt from a vague anxiety into a manageable backlog.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const postSlugs = posts.map((p) => p.slug);
export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
