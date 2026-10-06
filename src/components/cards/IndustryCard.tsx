"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import type { Industry } from "@/data/industries";

/**
 * Industry cell. The description is revealed on hover and focus rather than
 * always shown, keeping the grid quiet until a visitor engages with it.
 */
export function IndustryCard({ industry, index }: { industry: Industry; index: number }) {

  return (
    <motion.div
      tabIndex={0}
      role="group"
      aria-label={`${industry.name}: ${industry.description}`}
      className="group relative flex min-h-[9.5rem] flex-col justify-between overflow-hidden border-b border-r border-[var(--line)] p-6 outline-offset-[-2px] transition-colors sm:min-h-[11rem] sm:p-7"
      initial={false}
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-[var(--accent-soft)] transition-transform duration-[520ms] [transition-timing-function:var(--ease-out-expo)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
      />

      <div className="relative flex items-start justify-between">
        <Icon
                          name={industry.icon}
          className="size-5 text-[var(--fg-subtle)] transition-colors duration-500 group-hover:text-[var(--accent)] group-focus-visible:text-[var(--accent)]"
          strokeWidth={1.5}
          aria-hidden
        />
        <span className="micro-label text-[var(--fg-subtle)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative">
        <h3 className="text-[1.0625rem] font-semibold tracking-[-0.02em]">
          {industry.name}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden text-[0.8125rem] leading-[1.6] text-[var(--fg-muted)] opacity-0 transition-all duration-[520ms] [transition-timing-function:var(--ease-out-expo)] group-hover:max-h-40 group-hover:opacity-100 group-focus-visible:max-h-40 group-focus-visible:opacity-100">
          {industry.description}
        </p>
      </div>
    </motion.div>
  );
}
