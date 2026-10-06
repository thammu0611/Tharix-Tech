import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { differentiators } from "@/data/company";

export function WhyTharix() {
  return (
    <Section id="why" tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Why Tharix"
          index="04"
          title="Why Tharix?"
          lead="Technology should solve a business problem, not create another one."
        />

        <div className="mt-16 grid gap-x-12 gap-y-2 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => {
            return (
              <Reveal key={item.number} delay={(i % 3) * 0.07}>
                <div className="group h-full border-t border-[var(--line)] py-8">
                  <div className="flex items-center justify-between">
                    <span className="micro-label text-[var(--accent)]">{item.number}</span>
                    <Icon
                          name={item.icon}
                      className="size-5 text-[var(--fg-subtle)] transition-colors duration-500 group-hover:text-[var(--accent)]"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-6 text-[1.1875rem] font-bold uppercase tracking-[0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
