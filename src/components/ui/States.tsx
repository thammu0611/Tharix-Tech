import { AlertCircle, CircleDashed, Loader2, Info } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function LoadingState({
  label = "Loading",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-center justify-center gap-3 py-16 text-[var(--fg-muted)]",
        className,
      )}
    >
      <Loader2 className="size-4 animate-spin" aria-hidden />
      <span className="text-sm">{label}…</span>
    </div>
  );
}

export function ErrorState({
  title = "Something went wrong",
  description,
  action,
  className,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-start gap-3 border border-[var(--line)] bg-[var(--surface)] p-6 sm:flex-row sm:items-center sm:gap-5",
        className,
      )}
    >
      <AlertCircle className="size-5 shrink-0 text-[var(--accent)]" aria-hidden />
      <div className="flex-1">
        <p className="font-semibold tracking-[-0.01em]">{title}</p>
        {description && (
          <p className="mt-1 text-sm text-[var(--fg-muted)]">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 border border-dashed border-[var(--line-strong)] px-6 py-16 text-center",
        className,
      )}
    >
      <CircleDashed className="size-6 text-[var(--fg-subtle)]" aria-hidden />
      <div>
        <p className="text-lg font-semibold tracking-[-0.02em]">{title}</p>
        {description && (
          <p className="mx-auto mt-2 max-w-[46ch] text-sm leading-relaxed text-[var(--fg-muted)]">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

/**
 * Marks content that is awaiting verified company information. Used so the
 * site never implies a detail is confirmed when it is not.
 */
export function PlaceholderNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-start gap-2 text-[0.75rem] leading-relaxed text-[var(--fg-subtle)]",
        className,
      )}
    >
      <Info className="mt-px size-3.5 shrink-0" aria-hidden />
      <span>{children}</span>
    </p>
  );
}
