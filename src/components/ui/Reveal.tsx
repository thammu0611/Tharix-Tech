"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "up" | "fade" | "left";

const offsets: Record<Variant, { x?: number; y?: number }> = {
  up: { y: 18 },
  fade: {},
  left: { x: -14 },
};

/**
 * Scroll-triggered entrance. Deliberately restrained: a short distance and
 * one easing curve site-wide.
 *
 * Reduced motion is handled by <MotionConfig reducedMotion="user"> at the
 * root, which neutralises transform animation without changing the rendered
 * tree. Branching on `useReducedMotion()` here would produce different
 * markup on the server and the client and break hydration for exactly the
 * users we are trying to accommodate.
 */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  variant?: Variant;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[variant] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-64px 0px -64px 0px" }}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Word-by-word reveal for display headings. The markup is identical
 * regardless of motion preference; only the animation is suppressed.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  accentWords = [],
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Words rendered in the accent colour (case-insensitive, punctuation-tolerant). */
  accentWords?: string[];
}) {
  const words = text.split(" ");
  const accent = new Set(accentWords.map((w) => w.toLowerCase()));
  const isAccent = (word: string) =>
    accent.has(word.toLowerCase().replace(/[^a-z0-9-]/gi, ""));

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={
              isAccent(word) ? "inline-block text-[var(--accent)]" : "inline-block"
            }
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
