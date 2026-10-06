"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollState } from "@/hooks/use-scroll-state";

/** Persistent conversion action on small screens, once past the hero. */
export function StickyMobileCTA() {
  const { deep } = useScrollState();
  const pathname = usePathname();

  // Never shown on the page it points at.
  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {deep && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 p-3 md:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <Link
            href="/contact"
            className="glass glass-rim flex h-12 items-center justify-between rounded-full pl-5 pr-1.5 text-[0.9375rem] font-medium"
          >
            <span>Start a project</span>
            <span className="grid size-9 place-items-center rounded-full bg-[var(--accent)] text-[var(--on-accent)]">
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
