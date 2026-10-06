"use client";

import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { useScrollState } from "@/hooks/use-scroll-state";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const { scrolled } = useScrollState(16);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  // Reset navigation state when the route changes. Adjusting state during
  // render is React's documented pattern for this — no effect, no extra pass.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const openNow = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-[var(--radius-sm)] bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--on-accent)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-500 [transition-timing-function:var(--ease-out-expo)]",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <div className="mx-auto w-full max-w-[92rem] px-3 sm:px-5 lg:px-8">
          <div
            className={cn(
              "relative flex h-14 items-center justify-between rounded-full pl-4 pr-2 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] sm:pl-5",
              scrolled
                ? "glass glass-rim glass-strong"
                : "border border-transparent bg-transparent",
            )}
          >
            <Logo showSuffix={!scrolled} />

            {/* Desktop navigation */}
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-0.5">
                {primaryNav.map((item) => {
                  const active = isActive(item.href);
                  const hasChildren = Boolean(item.children?.length);

                  return (
                    <li
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => hasChildren && openNow(item.label)}
                      onMouseLeave={() => hasChildren && closeSoon()}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        aria-expanded={hasChildren ? openDropdown === item.label : undefined}
                        onFocus={() => hasChildren && openNow(item.label)}
                        className={cn(
                          "relative inline-flex h-9 items-center gap-1 rounded-full px-3.5 text-[0.875rem] font-medium transition-colors duration-300",
                          active
                            ? "text-[var(--fg)]"
                            : "text-[var(--fg-muted)] hover:text-[var(--fg)]",
                        )}
                      >
                        {item.label}
                        {hasChildren && (
                          <ChevronDown
                            className={cn(
                              "size-3 transition-transform duration-300",
                              openDropdown === item.label && "rotate-180",
                            )}
                            aria-hidden
                          />
                        )}
                        {active && (
                          <span
                            aria-hidden
                            className="absolute inset-x-3.5 -bottom-0.5 h-px bg-[var(--accent)]"
                          />
                        )}
                      </Link>

                      {hasChildren && openDropdown === item.label && (
                        <div
                          className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3"
                          onMouseEnter={() => openNow(item.label)}
                          onMouseLeave={closeSoon}
                        >
                          <ul className="glass glass-rim glass-strong overflow-hidden rounded-[var(--radius-md)] p-1.5">
                            {item.children!.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={cn(
                                    "flex items-center justify-between gap-3 rounded-[var(--radius-xs)] px-3 py-2.5 text-[0.8125rem] transition-colors",
                                    pathname === child.href
                                      ? "text-[var(--accent)]"
                                      : "text-[var(--fg-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--fg)]",
                                  )}
                                >
                                  {child.label}
                                  <ArrowRight className="size-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle className="hidden sm:inline-flex" />

              <Link
                href="/contact"
                className="arrow-shift hidden h-10 items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-[0.875rem] font-medium text-[var(--on-accent)] shadow-[0_1px_0_rgba(255,255,255,0.2)_inset] transition-colors duration-300 hover:bg-[var(--accent-hover)] lg:inline-flex"
              >
                Start a Project
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation"
                aria-expanded={menuOpen}
                className={cn(
                  "grid size-10 place-items-center rounded-full transition-colors lg:hidden",
                  scrolled
                    ? "border border-[var(--line)]"
                    : "glass glass-rim",
                )}
              >
                <Menu className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
