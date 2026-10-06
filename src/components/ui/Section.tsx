import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Space = "sm" | "md" | "lg";

const spacing: Record<Space, string> = {
  sm: "py-16 sm:py-20",
  md: "py-20 sm:py-28 lg:py-32",
  lg: "py-24 sm:py-32 lg:py-40",
};

/**
 * Section wrapper. `bordered` draws the hairline rule that separates every
 * major band of the page — the structural motif used site-wide instead of
 * boxing content into cards.
 */
export function Section({
  children,
  id,
  className,
  space = "md",
  bordered = true,
  tone = "canvas",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  space?: Space;
  bordered?: boolean;
  tone?: "canvas" | "surface" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        spacing[space],
        bordered && "border-t border-[var(--line)]",
        tone === "surface" && "bg-[var(--surface)]",
        tone === "ink" && "bg-[var(--color-ink-950)] text-[var(--color-paper-100)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
