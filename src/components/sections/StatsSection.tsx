import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { stats } from "@/data/company";

/**
 * Trust band. Figures are presented as company indicators with their basis
 * stated underneath — never as audited claims.
 */
export function StatsSection() {
  return (
    <Section space="sm" className="bg-[var(--surface)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-16">
          <Reveal>
            <h2 className="display-sub max-w-[16ch]">
              Technology, design and engineering under one roof.
            </h2>
          </Reveal>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.07}>
                <div className="border-t border-[var(--line-strong)] pt-5">
                  <dd className="text-[2.5rem] font-bold leading-none tracking-[-0.04em] sm:text-[3rem]">
                    {stat.value === null ? (
                      stat.display
                    ) : (
                      <Counter to={stat.value} suffix={stat.suffix} />
                    )}
                  </dd>
                  <dt className="mt-3 text-[0.875rem] font-medium">{stat.label}</dt>
                  <p className="mt-1.5 text-[0.6875rem] leading-relaxed text-[var(--fg-subtle)]">
                    {stat.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
