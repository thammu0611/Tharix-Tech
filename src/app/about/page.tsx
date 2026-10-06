import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderNote } from "@/components/ui/States";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";
import { StatsSection } from "@/components/sections/StatsSection";
import { approachPillars, mission, story, values, vision } from "@/data/company";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Tharix Technologies",
  description:
    "Tharix Technologies brings strategy, design and software engineering under one roof to help businesses turn ideas into scalable digital products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow="About"
        index="01"
        title="We build technology with purpose."
        accentWords={["purpose."]}
        lead="Tharix Technologies is a technology company focused on designing and engineering modern digital products. We bring together strategy, user experience and software engineering to help businesses transform ideas into scalable digital solutions."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <div className="h-20 sm:h-28" />

      {/* Our Story */}
      <Section id="story" tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <Reveal>
                <Eyebrow index="02">Our story</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="display-sub mt-6 max-w-[14ch]">
                  Built to sit between the business and the code.
                </h2>
              </Reveal>
            </div>

            <div>
              {story.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="mb-6 max-w-[64ch] text-[1.0625rem] leading-[1.72] text-[var(--fg-muted)] last:mb-0">
                    {paragraph}
                  </p>
                </Reveal>
              ))}

              {story.isPlaceholder && (
                <Reveal>
                  <PlaceholderNote className="mt-8 border-t border-[var(--line)] pt-6">
                    Company history is editable narrative content. Replace it with the
                    verified founding story in{" "}
                    <code className="font-mono text-[0.7rem]">src/data/company.ts</code>.
                  </PlaceholderNote>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section id="mission">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            {[
              { label: "Mission", body: mission, index: "03" },
              { label: "Vision", body: vision, index: "04" },
            ].map((block) => (
              <Reveal key={block.label}>
                <div className="h-full bg-[var(--surface)] p-8 sm:p-12">
                  <Eyebrow index={block.index}>{block.label}</Eyebrow>
                  <p className="mt-7 max-w-[30ch] text-[1.375rem] font-semibold leading-[1.32] tracking-[-0.028em] sm:text-[1.625rem]">
                    {block.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section id="values" tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Values"
            index="05"
            title="What we hold ourselves to."
            lead="Six commitments that decide how we work when a project is under pressure."
          />

          <div className="mt-16 grid gap-x-12 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 0.06}>
                <div className="border-t border-[var(--line)] py-8">
                  <span className="micro-label text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[1.1875rem] font-bold tracking-[-0.022em]">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 max-w-[38ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section id="approach">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            index="06"
            title="Strategy, design, engineering and technology — on the same problem, at the same time."
            lead="Most delivery problems are handover problems. We keep the four disciplines in one team so nothing is lost between them."
          />

          <ol className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {approachPillars.map((pillar, i) => (
              <Reveal key={pillar.label} delay={i * 0.07}>
                <li className="glass glass-rim h-full rounded-[var(--radius-md)] p-7">
                  <span className="micro-label text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[1.25rem] font-bold tracking-[-0.025em]">
                    {pillar.label}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-[1.65] text-[var(--fg-muted)]">
                    {pillar.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <StatsSection />
      <TeamSection />
      <CTASection
        eyebrow="Work with us"
        title="Let's talk about what you're building."
        secondaryLabel="See our services"
        secondaryHref="/services"
      />
    </>
  );
}
