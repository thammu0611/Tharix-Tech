import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          index="01"
          title="From idea to digital product."
          lead="We combine strategy, design and engineering to create digital experiences built for real-world impact."
          action={<TextLink href="/services">View all services</TextLink>}
        />
      </Container>

      {/* Services matrix — a bordered grid, not a row of floating cards.
          The grid is full-bleed so the rules read as page structure. */}
      <div className="mt-16 overflow-hidden border-t border-[var(--line)] sm:mt-20">
        <div className="-mr-px grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              className="border-r border-[var(--line)]"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
