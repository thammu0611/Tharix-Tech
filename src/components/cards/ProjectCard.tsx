import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { cn } from "@/lib/utils";

/**
 * Project card.
 *
 * `feature` lays the visual and the meta side by side across the full
 * content width — used for the lead project so a taller neighbouring
 * column never leaves dead space beside a short card.
 */
export function ProjectCard({
  project,
  className,
  size = "default",
}: {
  project: Project;
  className?: string;
  size?: "default" | "feature";
}) {
  const isFeature = size === "feature";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative block",
        isFeature && "lg:grid lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-12 xl:gap-16",
        className,
      )}
      aria-label={`View the ${project.name} case study`}
    >
      {/* Visual */}
      <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--canvas)]">
        <div className="blueprint-fine absolute inset-0 opacity-50" aria-hidden />
        <div
          className={cn(
            "relative p-5 transition-transform duration-[900ms] [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.015] sm:p-8",
            isFeature && "sm:p-12 lg:p-14",
          )}
        >
          <ProjectVisual visual={project.visual} label={`${project.name}, ${project.category}`} />
        </div>

        {project.isSample && (
          <span className="absolute left-4 top-4 rounded-full border border-[var(--line-strong)] bg-[var(--surface)]/90 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-[var(--fg-subtle)] backdrop-blur">
            Sample project
          </span>
        )}

        <span
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-[var(--fg)] text-[var(--canvas)] opacity-0 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:opacity-100"
          aria-hidden
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      {/* Meta */}
      <div className={cn("mt-6 flex flex-col gap-3", isFeature && "lg:mt-0")}>
        <div className="flex items-center gap-3">
          <span className="micro-label text-[var(--accent)]">{project.index}</span>
          <span className="h-px flex-1 bg-[var(--line)]" aria-hidden />
          <span className="micro-label text-[var(--fg-subtle)]">{project.industry}</span>
        </div>

        <h3
          className={cn(
            "font-bold tracking-[-0.03em] transition-colors group-hover:text-[var(--accent)]",
            isFeature ? "text-[1.75rem] sm:text-[2.125rem]" : "text-[1.375rem] sm:text-[1.5rem]",
          )}
        >
          {project.name}
        </h3>

        <p className="text-[0.875rem] font-medium text-[var(--fg-muted)]">
          {project.category}
        </p>

        <p className="max-w-[52ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
          {project.summary}
        </p>

        <ul className="mt-1 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.04em] text-[var(--fg-subtle)]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <span className="mt-2 inline-flex items-center gap-2 text-[0.875rem] font-medium transition-colors group-hover:text-[var(--accent)]">
          <span className="link-underline">View Case Study</span>
          <ArrowUpRight
            className="size-4 transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
