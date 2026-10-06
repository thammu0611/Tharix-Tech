"use client";

import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  forwardRef,
  useCallback,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] " +
  "font-medium tracking-[-0.01em] whitespace-nowrap transition-all duration-300 " +
  "[transition-timing-function:var(--ease-out-expo)] disabled:pointer-events-none disabled:opacity-55";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--on-accent)] shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_10px_28px_-14px_var(--accent)] " +
    "hover:bg-[var(--accent-hover)] hover:shadow-[0_1px_0_rgba(255,255,255,0.28)_inset,0_16px_36px_-14px_var(--accent)] active:translate-y-px",
  secondary:
    "glass glass-rim rounded-[var(--radius-sm)] text-[var(--fg)] hover:border-[var(--line-strong)] active:translate-y-px",
  ghost:
    "text-[var(--fg)] hover:text-[var(--accent)] px-0",
  inverse:
    "bg-[var(--color-paper-50)] text-[var(--color-ink-950)] hover:bg-[var(--color-paper-200)] active:translate-y-px",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Renders the signature trailing arrow that shifts on hover. */
  withArrow?: boolean;
  loading?: boolean;
}

/** Pointer-tracked specular highlight — the liquid-glass micro-interaction. */
function useSpecular() {
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);
}

export const Button = forwardRef<
  HTMLButtonElement,
  CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(function Button(
  { children, variant = "primary", size = "md", className, withArrow, loading, ...rest },
  ref,
) {
  const onMove = useSpecular();
  return (
    <button
      ref={ref}
      onMouseMove={variant === "secondary" ? onMove : undefined}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        variant === "secondary" && "glass-specular-track",
        withArrow && "arrow-shift",
        className,
      )}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden />
          <span>{children}</span>
        </>
      ) : (
        <>
          <span className="relative z-[2]">{children}</span>
          {withArrow && <ArrowRight className="relative z-[2] size-4" aria-hidden />}
        </>
      )}
    </button>
  );
});

export function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  withArrow,
  external,
  ...rest
}: CommonProps & {
  href: string;
  external?: boolean;
  "aria-label"?: string;
}) {
  const onMove = useSpecular();
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    variant === "secondary" && "glass-specular-track",
    withArrow && "arrow-shift",
    className,
  );

  const inner = (
    <>
      <span className="relative z-[2]">{children}</span>
      {withArrow && <ArrowRight className="relative z-[2] size-4" aria-hidden />}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onMouseMove={variant === "secondary" ? onMove : undefined}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      onMouseMove={variant === "secondary" ? onMove : undefined}
      {...rest}
    >
      {inner}
    </Link>
  );
}

/** The recurring inline text link with an animated underline and arrow. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "arrow-shift group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-[var(--fg)] transition-colors hover:text-[var(--accent)]",
        className,
      )}
    >
      <span className="link-underline">{children}</span>
      <ArrowRight className="size-4" aria-hidden />
    </Link>
  );
}
