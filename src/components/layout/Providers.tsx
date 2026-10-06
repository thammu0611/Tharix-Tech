"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/hooks/use-theme";

/**
 * Client-side providers.
 *
 * `reducedMotion="user"` is the single place motion preference is handled.
 * Framer neutralises transform and layout animation for those users without
 * altering the rendered tree — which matters, because branching markup on a
 * client-only media query is a hydration mismatch waiting to happen. The
 * CSS layer in globals.css collapses the remaining CSS animations.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>{children}</ThemeProvider>
    </MotionConfig>
  );
}
