import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

/**
 * A service is presented as a row in a matrix, not a floating card —
 * the accent wash on hover does the work a card border would otherwise do.
 */
export function ServiceCard({ service, className }: { service: Service; className?: string }) {

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "row-wash group relative flex flex-col gap-6 border-b border-[var(--line)] px-5 py-9 transition-colors sm:px-8 lg:px-10",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <span className="micro-label text-[var(--fg-subtle)] transition-colors group-hover:text-[var(--accent)]">
          {service.index}
        </span>
        <Icon
                          name={service.icon}
          className="size-5 shrink-0 text-[var(--fg-subtle)] transition-colors duration-500 group-hover:text-[var(--accent)]"
          aria-hidden
          strokeWidth={1.5}
        />
      </div>

      <div className="flex-1">
        <h3 className="text-[1.375rem] font-bold tracking-[-0.028em] sm:text-[1.5rem]">
          {service.title}
        </h3>
        <p className="mt-3 max-w-[42ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
          {service.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
          {service.capabilities.slice(0, 4).map((cap) => (
            <li
              key={cap}
              className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]"
            >
              {cap}
            </li>
          ))}
        </ul>
      </div>

      <span className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-[var(--fg)] transition-colors group-hover:text-[var(--accent)]">
        {service.cta}
        <ArrowRight
          className="size-4 transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
