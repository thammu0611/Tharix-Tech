import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { Icon } from "@/components/ui/Icon";
import { getService, services } from "@/data/services";
import { breadcrumbJsonLd, pageMeta, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(service.title, service.summary, `/services/${service.slug}`),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path: `/services/${service.slug}` },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow={`Service ${service.index}`}
        index={service.index}
        title={service.title}
        lead={service.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle, href: `/services/${service.slug}` },
        ]}
        aside={
          <div className="glass glass-rim rounded-[var(--radius-md)] p-7">
            <Icon name={service.icon} className="size-6 text-[var(--accent)]" strokeWidth={1.5} aria-hidden />
            <h2 className="micro-label mt-6 text-[var(--fg-subtle)]">Capabilities</h2>
            <ul className="mt-4 space-y-2.5">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2.5 text-[0.875rem]">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-[var(--accent)]" aria-hidden />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <div className="h-20 sm:h-28" />

      {/* How we approach it */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Approach"
            index="02"
            title={`How we approach ${service.shortTitle.toLowerCase()}.`}
          />

          <div className="mt-14 grid gap-x-14 gap-y-2 md:grid-cols-2">
            {service.detail.map((block, i) => (
              <Reveal key={block.title} delay={(i % 2) * 0.06}>
                <div className="border-t border-[var(--line)] py-8">
                  <span className="micro-label text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[1.25rem] font-bold tracking-[-0.025em]">
                    {block.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-[1.7] text-[var(--fg-muted)]">
                    {block.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Deliverables + outcomes + stack */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
            <Reveal>
              <div>
                <Eyebrow index="03">What you receive</Eyebrow>
                <ul className="mt-7 space-y-4">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-[var(--line)] pb-4 text-[0.9375rem] leading-[1.6]"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.07}>
              <div>
                <Eyebrow index="04">Outcomes</Eyebrow>
                <ul className="mt-7 space-y-4">
                  {service.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-[var(--line)] pb-4 text-[0.9375rem] leading-[1.6]"
                    >
                      <ArrowRight
                        className="mt-1 size-3.5 shrink-0 text-[var(--accent)]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div>
                <Eyebrow index="05">Typical stack</Eyebrow>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-[var(--line)] px-3.5 py-2 font-mono text-[0.75rem] text-[var(--fg-muted)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[0.8125rem] leading-relaxed text-[var(--fg-subtle)]">
                  Chosen per project against your constraints — team, timeline, budget and the
                  systems already in place.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ProcessTimeline />

      {/* Other services */}
      <Section tone="surface">
        <Container>
          <Eyebrow>Other services</Eyebrow>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex h-full flex-col justify-between gap-6 bg-[var(--canvas)] p-6 transition-colors hover:bg-[var(--accent-soft)]"
                >
                  <span className="micro-label text-[var(--fg-subtle)]">{other.index}</span>
                  <span className="text-[1rem] font-semibold leading-tight tracking-[-0.02em] transition-colors group-hover:text-[var(--accent)]">
                    {other.shortTitle}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection
        eyebrow="Start here"
        title={`Need ${service.shortTitle.toLowerCase()}? Let's scope it.`}
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  );
}
