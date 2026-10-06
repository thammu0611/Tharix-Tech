import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Tharix wordmark.
 *
 * The mark is a geometric "T" built from an aperture and a beam — a
 * reference to a lens and a signal path. Drawn, not typeset, so it stays
 * crisp at any size and needs no image asset.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      fill="none"
      aria-hidden
      focusable="false"
    >
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="7.25"
        className="fill-[var(--fg)]"
      />
      {/* Beam */}
      <path d="M8 10.5h16" stroke="var(--canvas)" strokeWidth="2.6" strokeLinecap="square" />
      {/* Stem */}
      <path d="M16 10.5V24" stroke="var(--canvas)" strokeWidth="2.6" strokeLinecap="square" />
      {/* Aperture — the accent signal */}
      <circle cx="16" cy="17.6" r="2.6" fill="var(--accent)" />
    </svg>
  );
}

export function Logo({
  className,
  showSuffix = true,
  href = "/",
}: {
  className?: string;
  showSuffix?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-[var(--radius-xs)]",
        className,
      )}
      aria-label="Tharix Technologies — home"
    >
      <LogoMark className="size-7 transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.06]" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-extrabold tracking-[0.14em] uppercase">
          Tharix
        </span>
        {showSuffix && (
          <span className="micro-label mt-1 text-[0.5625rem] tracking-[0.28em] text-[var(--fg-subtle)]">
            Technologies
          </span>
        )}
      </span>
    </Link>
  );
}
