"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Hairline reading-progress indicator pinned under the navigation bar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px origin-left bg-[var(--accent)]"
    />
  );
}
