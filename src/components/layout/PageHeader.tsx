import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href: string;
}

/**
 * Inner-page header. Uses the same blueprint substrate and mono labelling
 * as the home page so every route reads as one system.
 */
export function PageHeader({
  eyebrow,
  index,
  title,
  accentWords,
  lead,
  crumbs,
  aside,
  children,
  className,
}: {
  eyebrow: string;
  index?: string;
  title: string;
  accentWords?: string[];
  lead?: string;
  crumbs?: Crumb[];
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("relative overflow-hidden pt-32 sm:pt-36 lg:pt-44", className)}>
      <div
        className="blueprint pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem]"
        aria-hidden
        style={{
          background:
            "radial-gradient(70% 60% at 18% 0%, color-mix(in oklab, var(--accent) 8%, transparent), transparent 70%)",
        }}
      />

      <Container className="relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.75rem] text-[var(--fg-subtle)]">
              {crumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="size-3" aria-hidden />}
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-[var(--fg-muted)]">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-[var(--accent)]"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div
          className={cn(
            "grid gap-10",
            aside && "lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16",
          )}
        >
          <div>
            <Reveal>
              <Eyebrow index={index}>{eyebrow}</Eyebrow>
            </Reveal>

            <h1 className="display-section mt-7 max-w-[18ch]">
              <RevealText text={title} accentWords={accentWords} delay={0.06} />
            </h1>

            {lead && (
              <Reveal delay={0.16}>
                <p className="lead mt-7 max-w-[58ch]">{lead}</p>
              </Reveal>
            )}

            {children && <Reveal delay={0.24}>{children}</Reveal>}
          </div>

          {aside && <Reveal delay={0.2}>{aside}</Reveal>}
        </div>
      </Container>
    </header>
  );
}
