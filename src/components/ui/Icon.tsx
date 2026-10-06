import { createElement } from "react";
import type { LucideProps } from "lucide-react";
import { iconRegistry, type IconKey } from "@/lib/icons";

/**
 * Renders a registry icon by key.
 *
 * Data files store an icon *name*, not a component, so they stay
 * serialisable and portable to a CMS. Resolving through `createElement`
 * here keeps the lookup out of consumers' render bodies.
 */
export function Icon({ name, ...props }: { name: IconKey } & LucideProps) {
  return createElement(iconRegistry[name], props);
}
