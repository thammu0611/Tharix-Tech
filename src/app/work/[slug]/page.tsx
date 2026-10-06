import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EmptyState, PlaceholderNote } from "@/components/ui/States";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { CTASection } from "@/components/sections/CTASection";
import { getProject, projects } from "@/data/projects";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return pageMeta({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/work/${project.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: project.name, path: `/work/${project.slug}` },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow={`Case study ${project.index}`}
        index={project.index}
        title={project.name}
        lead={project.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: project.name, href: `/work/${project.slug}` },
        ]}
      >
        <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-[var(--line)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Category", value: project.category },
            { label: "Industry", value: project.industry },
            { label: "Year", value: project.year },
            { label: "Services", value: project.services.join(" · ") },
          ].map((item) => (
            <div key={item.label}>
              <dt className="micro-label text-[var(--fg-subtle)]">{item.label}</dt>
              <dd className="mt-2.5 text-[0.9375rem] leading-snug">{item.value}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      {/* Hero visual */}
      <Container className="relative mt-14 sm:mt-20">
        <Reveal>
          <figure className="glass glass-rim overflow-hidden rounded-[var(--radius-lg)]">
            <div className="blueprint-fine absolute inset-0 opacity-60" aria-hidden />
            <div className="relative p-6 sm:p-12 lg:p-16">
              <ProjectVisual
                visual={project.visual}
                label={`${project.name}, ${project.category}`}
              />
            </div>
            <figcaption className="relative flex items-center justify-between gap-4 border-t border-[var(--line)] px-6 py-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--fg-subtle)] sm:px-12">
              <span>Interface concept — illustrative</span>
              <span>THX / {project.index}</span>
            </figcaption>
          </figure>
        </Reveal>

        {project.isSample && (
          <Reveal>
            <PlaceholderNote className="mt-6">
              Sample project. This case study demonstrates how Tharix documents an engagement;
              it is not a client project, and the illustration above is an abstract concept
              rather than a screenshot of shipped software.
            </PlaceholderNote>
          </Reveal>
        )}
      </Container>

      {/* The twelve-part narrative */}
      <Section space="lg" bordered={false} className="pt-20 sm:pt-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-20">
            {/* Contents rail */}
            <nav aria-label="Case study contents" className="lg:sticky lg:top-28 lg:h-fit">
              <Eyebrow>Contents</Eyebrow>
              <ol className="mt-6 space-y-2.5">
                {project.sections.map((section) => (
                  <li key={section.number}>
                    <a
                      href={`#section-${section.number}`}
                      className="group flex items-baseline gap-3 text-[0.8125rem] text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
                    >
                      <span className="font-mono text-[0.6875rem] text-[var(--fg-subtle)]">
                        {section.number}
                      </span>
                      <span className="link-underline">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div>
              {project.sections.map((section, i) => {
                const isResults = section.title === "Results";
                return (
                  <Reveal key={section.number} delay={0.02}>
                    <article
                      id={`section-${section.number}`}
                      className="scroll-mt-28 border-t border-[var(--line)] py-10 first:border-t-0 first:pt-0 sm:py-12"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="micro-label text-[var(--accent)]">
                          {section.number}
                        </span>
                        <h2 className="text-[1.5rem] font-bold tracking-[-0.03em] sm:text-[1.875rem]">
                          {section.title}
                        </h2>
                      </div>

                      <p className="mt-5 max-w-[68ch] text-[1.0625rem] leading-[1.72] text-[var(--fg-muted)]">
                        {section.body}
                      </p>

                      {section.points && (
                        <ul className="mt-6 space-y-3">
                          {section.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]"
                            >
                              <span
                                aria-hidden
                                className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}

                      {isResults && project.results.length === 0 && (
                        <div className="mt-7">
                          <EmptyState
                            title="No published metrics for this project"
                            description="Measurable results are published only when they have been verified and approved for release by the client, together with the method used to measure them."
                          />
                        </div>
                      )}

                      {isResults && project.results.length > 0 && (
                        <dl className="mt-8 grid gap-8 sm:grid-cols-3">
                          {project.results.map((result) => (
                            <div key={result.label} className="border-t border-[var(--line-strong)] pt-5">
                              <dd className="text-[2.25rem] font-bold leading-none tracking-[-0.04em]">
                                {result.metric}
                              </dd>
                              <dt className="mt-3 text-[0.875rem] font-medium">
                                {result.label}
                              </dt>
                              {result.note && (
                                <p className="mt-1.5 text-[0.6875rem] text-[var(--fg-subtle)]">
                                  {result.note}
                                </p>
                              )}
                            </div>
                          ))}
                        </dl>
                      )}

                      {i === project.sections.length - 1 && (
                        <ul className="mt-8 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full border border-[var(--line)] px-3.5 py-2 font-mono text-[0.75rem] text-[var(--fg-muted)]"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Next project */}
      <Section space="sm" tone="surface">
        <Container>
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <Eyebrow>Next case study</Eyebrow>
              <h2 className="display-sub mt-5 transition-colors group-hover:text-[var(--accent)]">
                {next.name}
              </h2>
              <p className="mt-2 text-[0.9375rem] text-[var(--fg-muted)]">{next.category}</p>
            </div>
            <span
              aria-hidden
              className="grid size-14 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--on-accent)]"
            >
              <ArrowRight className="size-5" />
            </span>
          </Link>
        </Container>
      </Section>

      <CTASection
        eyebrow="Your project"
        title="Have a similar challenge? Let's build it."
        secondaryLabel="See all work"
        secondaryHref="/work"
      />
    </>
  );
}
