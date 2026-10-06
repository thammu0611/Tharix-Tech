import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { industries } from "@/data/industries";

export function IndustriesSection() {
  return (
    <Section id="industries" tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          index="06"
          title="Solutions across industries."
          lead="Technology built around the needs of your industry."
        />
      </Container>

      <div className="mt-16 overflow-hidden border-t border-[var(--line)] sm:mt-20">
        <div className="-mr-px grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
