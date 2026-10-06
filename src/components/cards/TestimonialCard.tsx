import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="glass glass-rim flex h-full flex-col justify-between rounded-[var(--radius-md)] p-8 sm:p-10">
      <blockquote className="text-[1.125rem] leading-[1.6] tracking-[-0.015em] sm:text-[1.25rem]">
        <span aria-hidden className="mr-1 text-[var(--accent)]">
          “
        </span>
        {testimonial.quote}
        <span aria-hidden className="text-[var(--accent)]">
          ”
        </span>
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4 border-t border-[var(--line)] pt-6">
        {testimonial.photo ? (
          <Image
            src={testimonial.photo}
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden
            className="grid size-11 shrink-0 place-items-center rounded-full border border-[var(--line)] font-mono text-[0.8125rem] text-[var(--fg-subtle)]"
          >
            {testimonial.name.slice(0, 1)}
          </span>
        )}
        <div className="min-w-0">
          <p className="text-[0.9375rem] font-semibold tracking-[-0.015em]">
            {testimonial.name}
          </p>
          <p className="truncate text-[0.8125rem] text-[var(--fg-muted)]">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
