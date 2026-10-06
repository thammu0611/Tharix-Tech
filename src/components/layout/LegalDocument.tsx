import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PlaceholderNote } from "@/components/ui/States";
import { CTASection } from "@/components/sections/CTASection";
import { lastReviewed, type LegalSection } from "@/data/legal";
import { formatDate } from "@/lib/utils";

export function LegalDocument({
  title,
  eyebrow,
  lead,
  path,
  sections,
}: {
  title: string;
  eyebrow: string;
  lead: string;
  path: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        crumbs={[
          { label: "Home", href: "/" },
          { label: title, href: path },
        ]}
      >
        <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
          Last reviewed {formatDate(lastReviewed)}
        </p>
      </PageHeader>

      <Section space="lg" bordered={false} className="pt-14 sm:pt-16">
        <Container width="narrow">
          <PlaceholderNote className="mb-12 border-y border-[var(--line)] py-5">
            This document is a plain-English template prepared during the build. It has not
            been reviewed by a lawyer and is not legal advice. Have it checked against the
            jurisdictions Tharix operates in before publication — the content is editable in{" "}
            <code className="font-mono text-[0.7rem]">src/data/legal.ts</code>.
          </PlaceholderNote>

          <div className="flex flex-col gap-12">
            {sections.map((section, i) => (
              <section key={section.heading}>
                <div className="flex items-baseline gap-4">
                  <span className="micro-label text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[1.25rem] font-bold tracking-[-0.028em] sm:text-[1.5rem]">
                    {section.heading}
                  </h2>
                </div>

                {section.paragraphs.map((paragraph, j) => (
                  <p
                    key={j}
                    className="mt-4 text-[1rem] leading-[1.75] text-[var(--fg-muted)]"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Questions"
        title="Need something clarified?"
        lead="If anything here affects a decision you are making, ask us directly and we will answer plainly."
        secondaryLabel="Back to home"
        secondaryHref="/"
      />
    </>
  );
}
