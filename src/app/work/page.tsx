import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderNote } from "@/components/ui/States";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/data/projects";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Selected Work & Case Studies",
  description:
    "Case studies from Tharix Technologies covering e-commerce, AI analytics, healthcare mobile and business operations platforms — research, design, architecture and delivery.",
  path: "/work",
});

export default function WorkPage() {
  const anySample = projects.some((p) => p.isSample);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow="Selected work"
        index="01"
        title="Digital products built to make an impact."
        accentWords={["impact."]}
        lead="Turning complex ideas into simple digital experiences. Each case study follows the same twelve-part structure, from the original business problem through to the technology that solved it."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
        ]}
      />

      <Section space="lg" bordered={false} className="pt-20 sm:pt-28">
        <Container>
          {anySample && (
            <Reveal>
              <div className="mb-14 border-y border-[var(--line)] py-5">
                <PlaceholderNote>
                  The case studies below are clearly marked sample concepts, published to
                  demonstrate the format and the depth of thinking behind an engagement. They
                  are not client projects, and no measured results are claimed for them.
                  Replace them in{" "}
                  <code className="font-mono text-[0.7rem]">src/data/projects.ts</code> as real
                  work is approved for publication.
                </PlaceholderNote>
              </div>
            </Reveal>
          )}

          <div className="grid gap-16 sm:gap-20 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-24">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Your project"
        title="Have a similar challenge? Let's build it."
        secondaryLabel="View our services"
        secondaryHref="/services"
      />
    </>
  );
}
