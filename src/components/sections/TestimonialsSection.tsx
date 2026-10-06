"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmptyState, PlaceholderNote } from "@/components/ui/States";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { approvedTestimonials } from "@/data/testimonials";

/**
 * Testimonial carousel.
 *
 * If no approved, attributable testimonials exist, the section renders an
 * honest empty state. Tharix does not publish invented client quotes.
 */
export function TestimonialsSection() {
  const items = approvedTestimonials;
  const [index, setIndex] = useState(0);

  if (items.length === 0) {
    return (
      <Section id="testimonials">
        <Container>
          <SectionHeading
            eyebrow="Clients"
            index="08"
            title="What our clients say"
            lead="Client references are published here once the client has approved the wording and agreed to be named."
          />
          <div className="mt-12">
            <EmptyState
              title="No published client testimonials yet"
              description="We do not publish anonymous or invented quotes. Approved, attributable client references will appear here as they become available."
            />
            <PlaceholderNote className="mt-5">
              Add approved testimonials in{" "}
              <code className="font-mono text-[0.7rem]">src/data/testimonials.ts</code> and set{" "}
              <code className="font-mono text-[0.7rem]">approved: true</code>.
            </PlaceholderNote>
          </div>
        </Container>
      </Section>
    );
  }

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Clients"
          index="08"
          title="What our clients say"
          action={
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid size-11 place-items-center rounded-full border border-[var(--line)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <ArrowLeft className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid size-11 place-items-center rounded-full border border-[var(--line)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <ArrowRight className="size-4" aria-hidden />
              </button>
            </div>
          }
        />

        <div className="relative mt-12 min-h-[18rem]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={items[index].id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <TestimonialCard testimonial={items[index]} />
            </motion.div>
          </AnimatePresence>

          <p className="mt-6 font-mono text-[0.6875rem] tracking-[0.14em] text-[var(--fg-subtle)]">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>
        </div>
      </Container>
    </Section>
  );
}
