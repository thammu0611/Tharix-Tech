import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderNote } from "@/components/ui/States";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function FeaturedWork() {
  const [lead, ...rest] = featuredProjects;
  const anySample = featuredProjects.some((p) => p.isSample);

  return (
    <Section id="work">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          index="03"
          title="Digital products built to make an impact."
          lead="Turning complex ideas into simple digital experiences."
          action={<TextLink href="/work">View all work</TextLink>}
        />

        {/* The lead project runs full width with its meta alongside, then the
            supporting projects sit in an even two-column row. Keeps the band
            balanced instead of leaving dead space beside a shorter card. */}
        <div className="mt-16 sm:mt-20">
          {lead && (
            <Reveal>
              <ProjectCard project={lead} size="feature" />
            </Reveal>
          )}

          <div className="mt-16 grid gap-14 border-t border-[var(--line)] pt-16 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-14">
            {rest.slice(0, 2).map((project, i) => (
              <Reveal key={project.slug} delay={0.08 + i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        {anySample && (
          <Reveal>
            <PlaceholderNote className="mt-12 border-t border-[var(--line)] pt-6">
              The projects shown are clearly marked sample concepts, published to
              demonstrate the case-study format. They are not client engagements, and no
              performance figures are claimed for them. Replace them in{" "}
              <code className="font-mono text-[0.7rem]">src/data/projects.ts</code> as real
              work is approved for publication.
            </PlaceholderNote>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
