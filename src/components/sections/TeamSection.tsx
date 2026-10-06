import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderNote } from "@/components/ui/States";
import { TeamCard } from "@/components/cards/TeamCard";
import { team } from "@/data/team";

export function TeamSection() {
  const anyPlaceholder = team.some((m) => m.isPlaceholder);

  return (
    <Section id="team" tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Team"
          title="The people behind the products."
          lead="Small, senior and directly involved. The people who scope your project are the people who build it."
        />
      </Container>

      <div className="mt-16 overflow-hidden border-t border-[var(--line)] sm:mt-20">
        <div className="-mr-px grid sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {anyPlaceholder && (
        <Container>
          <PlaceholderNote className="mt-8">
            Team profiles are role placeholders. Names, photographs, biographies and profile
            links are added in{" "}
            <code className="font-mono text-[0.7rem]">src/data/team.ts</code> once the company
            supplies them — nothing here is invented.
          </PlaceholderNote>
        </Container>
      )}
    </Section>
  );
}
