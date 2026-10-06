"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

/**
 * Process timeline.
 * Horizontal rail on desktop, vertical rail on mobile — in both cases the
 * accent line fills as the section scrolls through the viewport.
 */
export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const scaleX = useTransform(progress, (v) => v);

  return (
    <Section id="process">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          index="05"
          title="How we turn ideas into products."
          lead="Six stages, each with a defined output. You always know what is being produced and what happens next."
        />

        <div ref={ref} className="mt-16 sm:mt-24">
          {/* Rail */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-x-0 top-[0.6875rem] h-px bg-[var(--line)]" aria-hidden />
            <motion.div
              aria-hidden
              style={{ scaleX }}
              className="absolute inset-x-0 top-[0.6875rem] h-px origin-left bg-[var(--accent)]"
            />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-6 lg:gap-6">
            {/* Mobile rail */}
            <div
              className="absolute left-[0.6875rem] top-2 h-[calc(100%-1rem)] w-px bg-[var(--line)] lg:hidden"
              aria-hidden
            />

            {processSteps.map((step, i) => (
              <li key={step.number} className="relative pl-10 lg:pl-0">
                <Reveal delay={i * 0.06} className="flex h-full flex-col">
                  {/* Node */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-1 grid size-[1.375rem] place-items-center rounded-full border border-[var(--line-strong)] bg-[var(--canvas)] lg:relative lg:top-0 lg:mb-7"
                  >
                    <span className="size-1.5 rounded-full bg-[var(--accent)]" />
                  </span>

                  <p className="micro-label text-[var(--accent)] lg:mt-0">{step.number}</p>
                  <h3 className="mt-3 text-[1.125rem] font-bold uppercase tracking-[0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                    {step.summary}
                  </p>
                  <p className="mt-3 hidden text-[0.8125rem] leading-[1.65] text-[var(--fg-subtle)] xl:block">
                    {step.detail}
                  </p>

                  {/* mt-auto pins every output rule to a common baseline
                      across the six columns, whatever the copy length. */}
                  <ul className="mt-4 space-y-1.5 border-t border-[var(--line)] pt-4 lg:mt-auto lg:pt-5">
                    {step.outputs.map((output) => (
                      <li
                        key={output}
                        className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-[var(--fg-subtle)]"
                      >
                        {output}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
