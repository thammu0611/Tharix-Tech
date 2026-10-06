"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollState } from "@/hooks/use-scroll-state";

export function BackToTop() {
  const { deep } = useScrollState();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {deep && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
          }
          aria-label="Back to top"
          className="glass glass-rim fixed bottom-6 right-5 z-50 hidden size-11 place-items-center rounded-full text-[var(--fg)] transition-colors hover:text-[var(--accent)] md:grid lg:right-8"
        >
          <ArrowUp className="size-4" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
