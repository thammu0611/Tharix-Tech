import type { IconKey } from "@/lib/icons";

export interface Industry {
  name: string;
  icon: IconKey;
  description: string;
}

export const industries: Industry[] = [
  {
    name: "Healthcare",
    icon: "health",
    description:
      "Patient-facing applications and clinical tooling where accessibility, privacy and reliability are requirements rather than features.",
  },
  {
    name: "FinTech",
    icon: "landmark",
    description:
      "Transactional systems with auditability, strong access control and correctness guarantees designed in from the schema up.",
  },
  {
    name: "Education",
    icon: "graduation",
    description:
      "Learning platforms that hold up under term-time load and work on the devices students actually own.",
  },
  {
    name: "E-Commerce",
    icon: "shoppingCart",
    description:
      "Storefronts and commerce operations built around catalogue scale, fast browsing and checkout that does not lose people.",
  },
  {
    name: "SaaS",
    icon: "boxes",
    description:
      "Multi-tenant products with clean billing, permissions and onboarding — the parts that decide whether a trial converts.",
  },
  {
    name: "Logistics",
    icon: "truck",
    description:
      "Operational systems that track state accurately across handoffs and keep working when connectivity does not.",
  },
  {
    name: "Real Estate",
    icon: "home",
    description:
      "Listing platforms and transaction workflows with heavy media, map search and long-running document processes.",
  },
  {
    name: "Hospitality",
    icon: "utensils",
    description:
      "Booking, ordering and guest experience systems that stay calm during the busiest two hours of the day.",
  },
  {
    name: "Manufacturing",
    icon: "factory",
    description:
      "Production visibility, inventory and quality tracking integrated with the equipment and ERP already in place.",
  },
  {
    name: "Startups",
    icon: "rocket",
    description:
      "Early products built to be validated quickly without accumulating architecture that blocks the next round of growth.",
  },
];
