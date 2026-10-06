"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techCategories, technologies } from "@/data/technologies";
import { cn } from "@/lib/utils";

/**
 * Technology grid.
 *
 * Marks are set as two-letter monograms rather than vendor logos: no
 * third-party trademarks, no mismatched logo weights, and the grid stays
 * legible in both themes. Hovering or focusing a cell reveals its category
 * and a one-line rationale.
 */
export function TechnologySection() {
  const [active, setActive] = useState<string | null>(null);
  const current = technologies.find((t) => t.name === active);

  return (
    <Section id="technology" tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Capability"
          index="02"
          title="Built with modern technology."
          lead="We choose technology based on the problem, not the trend."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <div>
            {techCategories.map((category) => {
              const items = technologies.filter((t) => t.category === category);
              return (
                <div
                  key={category}
                  className="grid gap-4 border-t border-[var(--line)] py-6 sm:grid-cols-[8rem_1fr] sm:gap-8"
                >
                  <h3 className="micro-label pt-2 text-[var(--fg-subtle)]">{category}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <li key={tech.name}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(tech.name)}
                          onMouseLeave={() => setActive(null)}
                          onFocus={() => setActive(tech.name)}
                          onBlur={() => setActive(null)}
                          aria-describedby="tech-detail"
                          className={cn(
                            "group inline-flex items-center gap-2.5 rounded-full border py-2 pl-2 pr-4 text-[0.875rem] transition-all duration-400 [transition-timing-function:var(--ease-out-expo)]",
                            active === tech.name
                              ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--fg)]"
                              : "border-[var(--line)] text-[var(--fg-muted)] hover:border-[var(--line-strong)] hover:text-[var(--fg)]",
                          )}
                        >
                          <span
                            aria-hidden
                            className={cn(
                              "grid size-6 place-items-center rounded-full font-mono text-[0.625rem] font-semibold transition-colors",
                              active === tech.name
                                ? "bg-[var(--accent)] text-[var(--on-accent)]"
                                : "bg-[var(--canvas)] text-[var(--fg-subtle)]",
                            )}
                          >
                            {tech.mark}
                          </span>
                          {tech.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Detail panel — glass, pinned on desktop. */}
          <aside
            id="tech-detail"
            aria-live="polite"
            className="glass glass-rim hidden h-fit rounded-[var(--radius-md)] p-6 lg:sticky lg:top-28 lg:block"
          >
            {current ? (
              <>
                <span className="grid size-10 place-items-center rounded-full bg-[var(--accent)] font-mono text-[0.75rem] font-semibold text-[var(--on-accent)]">
                  {current.mark}
                </span>
                <p className="micro-label mt-5 text-[var(--fg-subtle)]">{current.category}</p>
                <h3 className="mt-2 text-[1.125rem] font-semibold tracking-[-0.02em]">
                  {current.name}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.6] text-[var(--fg-muted)]">
                  {current.description}
                </p>
              </>
            ) : (
              <>
                <span
                  aria-hidden
                  className="grid size-10 place-items-center rounded-full border border-dashed border-[var(--line-strong)] font-mono text-[0.75rem] text-[var(--fg-subtle)]"
                >
                  ??
                </span>
                <p className="micro-label mt-5 text-[var(--fg-subtle)]">Reference</p>
                <p className="mt-3 text-[0.875rem] leading-[1.6] text-[var(--fg-muted)]">
                  Hover or focus any technology to see where we use it and why it was chosen.
                </p>
              </>
            )}
          </aside>
        </div>
      </Container>
    </Section>
  );
}
