import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";

const pillars = [
  "Product Engineering",
  "Software Development",
  "AI & Machine Learning",
  "Cloud Technology",
  "Digital Transformation",
  "UI/UX Design",
];

export function AboutTeaser() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow index="07">About Tharix</Eyebrow>
            </Reveal>

            <h2 className="display-section mt-7 max-w-[15ch]">
              <RevealText text="We build technology with purpose." accentWords={["purpose."]} />
            </h2>

            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-[56ch]">
                Tharix Technologies is a technology company focused on designing and
                engineering modern digital products. We bring together strategy, user
                experience and software engineering to help businesses transform ideas into
                scalable digital solutions.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10">
                <TextLink href="/about">Learn More About Tharix</TextLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {pillars.map((pillar, i) => (
                <li
                  key={pillar}
                  className="group flex items-center gap-4 bg-[var(--surface)] px-5 py-6 transition-colors hover:bg-[var(--accent-soft)]"
                >
                  <span className="micro-label text-[var(--fg-subtle)] transition-colors group-hover:text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9375rem] font-medium tracking-[-0.015em]">
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
