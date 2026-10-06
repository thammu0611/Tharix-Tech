"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { primaryNav } from "@/data/navigation";
import { contact, isLive } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Full-height navigation drawer.
 * Focus is trapped while open, Escape closes, and background scroll is locked.
 */
export function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Close navigation"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 bg-[var(--canvas)]/70 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
            className="glass glass-strong absolute inset-y-0 right-0 flex w-full max-w-[26rem] flex-col border-l border-[var(--line)]"
          >
            <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
              <Logo showSuffix={false} />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="grid size-10 place-items-center rounded-full border border-[var(--line)] transition-colors hover:border-[var(--line-strong)]"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="flex-1 overflow-y-auto overscroll-contain px-5 py-6"
            >
              <ul className="flex flex-col">
                {primaryNav.map((item, i) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.045,
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="border-b border-[var(--line)]"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className="flex items-baseline gap-3 py-4 text-2xl font-semibold tracking-[-0.03em]"
                      >
                        <span className="micro-label w-6 text-[var(--fg-subtle)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className={active ? "text-[var(--accent)]" : undefined}>
                          {item.label}
                        </span>
                      </Link>

                      {item.children && (
                        <ul className="-mt-1 flex flex-wrap gap-x-4 gap-y-1 pb-4 pl-9">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="text-[0.8125rem] text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-[var(--line)] px-5 py-5">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex h-12 w-full items-center justify-between rounded-[var(--radius-sm)] bg-[var(--accent)] px-5 font-medium text-[var(--on-accent)]"
              >
                Start a Project
                <ArrowRight className="size-4" aria-hidden />
              </Link>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="min-w-0 text-[0.75rem] leading-relaxed text-[var(--fg-subtle)]">
                  <p className="truncate">{contact.location.value}</p>
                  <p className="truncate">
                    {isLive(contact.email) ? contact.email.value : "Email — to be confirmed"}
                  </p>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
