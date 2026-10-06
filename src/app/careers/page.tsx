import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EmptyState } from "@/components/ui/States";
import { ButtonLink } from "@/components/ui/Button";
import { JobCard } from "@/components/cards/JobCard";
import { CTASection } from "@/components/sections/CTASection";
import {
  benefits,
  culture,
  development,
  hiringProcess,
  openJobs,
} from "@/data/careers";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Careers at Tharix Technologies",
  description:
    "Engineering, design and product roles at Tharix Technologies in Chennai. Real ownership, structured growth and a hiring process that respects your time.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Careers", path: "/careers" },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow="Careers"
        index="01"
        title="Build the future with Tharix."
        accentWords={["Tharix."]}
        lead="We're looking for curious people who enjoy solving difficult problems and building meaningful technology."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      >
        <div className="mt-10">
          <ButtonLink href="#open-positions" size="lg" withArrow>
            See open positions
          </ButtonLink>
        </div>
      </PageHeader>

      <div className="h-20 sm:h-28" />

      {/* Why join + culture */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Why join Tharix"
            index="02"
            title="Small team, real ownership."
            lead="You will not spend a year on a corner of someone else's system. You will own features, talk to clients, and see your work in production quickly."
          />

          <div className="mt-16 grid gap-x-14 gap-y-2 md:grid-cols-2">
            {culture.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.06}>
                <div className="border-t border-[var(--line)] py-8">
                  <span className="micro-label text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[1.1875rem] font-bold tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[48ch] text-[0.9375rem] leading-[1.68] text-[var(--fg-muted)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Benefits" index="03" title="What we offer." />

          <ul className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="bg-[var(--surface)] p-7">
                <h3 className="text-[1.0625rem] font-semibold tracking-[-0.02em]">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-[0.875rem] leading-[1.65] text-[var(--fg-muted)]">
                  {benefit.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Open positions */}
      <Section id="open-positions" tone="surface" className="scroll-mt-24">
        <Container>
          <SectionHeading
            eyebrow="Open positions"
            index="04"
            title="Roles we're hiring for."
            lead="Confirm current availability with the team before applying — this list is maintained in the codebase."
          />

          <div className="mt-14">
            {openJobs.length > 0 ? (
              <div className="border-t border-[var(--line)]">
                {openJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No open positions right now"
                description="We keep good applications on file. Send us your work and what you would like to be doing in a year."
                action={
                  <ButtonLink href="/contact" size="sm" withArrow>
                    Introduce yourself
                  </ButtonLink>
                }
              />
            )}
          </div>
        </Container>
      </Section>

      {/* Hiring process */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Hiring process"
            index="05"
            title="How hiring works here."
            lead="Six steps, roughly two to three weeks. No unpaid take-homes, no algorithm puzzles unrelated to the job."
          />

          <ol className="mt-16 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {hiringProcess.map((step, i) => (
              <Reveal key={step.number} delay={(i % 3) * 0.06}>
                <li className="border-t border-[var(--line)] py-8">
                  <span className="micro-label text-[var(--accent)]">{step.number}</span>
                  <h3 className="mt-5 text-[1.0625rem] font-bold tracking-[-0.022em]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[40ch] text-[0.875rem] leading-[1.65] text-[var(--fg-muted)]">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Development */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Employee development"
            index="06"
            title="How you grow here."
          />

          <ul className="mt-14 grid gap-x-14 gap-y-2 md:grid-cols-2">
            {development.map((item) => (
              <li key={item.title} className="border-t border-[var(--line)] py-7">
                <h3 className="text-[1.0625rem] font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-[46ch] text-[0.875rem] leading-[1.65] text-[var(--fg-muted)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection
        eyebrow="Apply"
        title="Think you'd fit? Tell us why."
        lead="Send us something you have built and what you would like to be working on in a year. We read every application ourselves."
        primaryLabel="Send an application"
        secondaryLabel="Learn about Tharix"
        secondaryHref="/about"
      />
    </>
  );
}
