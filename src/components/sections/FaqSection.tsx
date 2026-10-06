import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { TextLink } from "@/components/ui/Button";
import { faqs } from "@/data/faq";

export function FaqSection({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Section id="faq" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionHeading
              eyebrow="Questions"
              index="09"
              title="Frequently asked."
              lead="If your question is not here, ask it directly — we answer scoping questions before there is a contract."
            />
            <div className="mt-8">
              <TextLink href="/contact">Ask a question</TextLink>
            </div>
          </div>

          <div>
            <Accordion items={items} />
            {limit && limit < faqs.length && (
              <div className="mt-8">
                <TextLink href="/faq">See all questions</TextLink>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
