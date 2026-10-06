import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** The mono micro-label used above every section heading. */
export function Eyebrow({
  children,
  className,
  index,
}: {
  children: ReactNode;
  className?: string;
  /** Optional two-digit index rendered in brackets, e.g. [ 03 ]. */
  index?: string;
}) {
  return (
    <p
      className={cn(
        "micro-label flex items-center gap-3 text-[var(--fg-subtle)]",
        className,
      )}
    >
      {index && (
        <span className="text-[var(--accent)]" aria-hidden>
          [ {index} ]
        </span>
      )}
      <span className="inline-block h-px w-6 bg-[var(--line-strong)]" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  className,
  action,
}: {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal>
        <div className={cn("flex flex-col gap-6", align === "center" && "items-center")}>
          {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
          <Tag
            className={cn(
              "display-section max-w-[20ch]",
              align === "center" && "max-w-[24ch]",
            )}
          >
            {title}
          </Tag>
        </div>
      </Reveal>

      {(lead || action) && (
        <Reveal delay={0.08}>
          <div
            className={cn(
              "flex flex-col gap-6",
              align === "left" &&
                "sm:flex-row sm:items-end sm:justify-between sm:gap-12",
            )}
          >
            {lead && (
              <p className={cn("lead max-w-[54ch]", align === "center" && "mx-auto")}>
                {lead}
              </p>
            )}
            {action && <div className="shrink-0">{action}</div>}
          </div>
        </Reveal>
      )}
    </div>
  );
}
