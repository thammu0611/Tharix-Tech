import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { CTASection } from "@/components/sections/CTASection";
import { industries } from "@/data/industries";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Solutions Across Industries",
  description:
    "Technology built around the needs of your industry — healthcare, fintech, education, e-commerce, SaaS, logistics, real estate, hospitality, manufacturing and startups.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Solutions", path: "/solutions" },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow="Solutions"
        index="01"
        title="Solutions across industries."
        accentWords={["industries."]}
        lead="Technology built around the needs of your industry. The engineering discipline stays constant; the constraints, vocabulary and compliance requirements do not."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
      />

      <div className="mt-20 overflow-hidden border-t border-[var(--line)] sm:mt-28">
        <div className="-mr-px grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} />
          ))}
        </div>
      </div>

      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Capability"
            index="02"
            title="What we bring to each of them."
            lead="Six service areas, combined per engagement. Most industry problems need at least three of them."
          />

          <ul className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              return (
                <li key={service.slug}>
                  <Reveal>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col gap-5 bg-[var(--canvas)] p-7 transition-colors hover:bg-[var(--accent-soft)]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="micro-label text-[var(--fg-subtle)]">
                          {service.index}
                        </span>
                        <Icon
                          name={service.icon}
                          className="size-5 text-[var(--fg-subtle)] transition-colors group-hover:text-[var(--accent)]"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </div>
                      <h3 className="text-[1.125rem] font-bold tracking-[-0.025em]">
                        {service.title}
                      </h3>
                      <p className="text-[0.875rem] leading-[1.65] text-[var(--fg-muted)]">
                        {service.summary}
                      </p>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CTASection
        eyebrow="Your industry"
        title="Tell us what your sector makes hard."
        lead="Every industry has a constraint that generic software ignores. Tell us yours and we will tell you how we would work around it."
      />
    </>
  );
}
