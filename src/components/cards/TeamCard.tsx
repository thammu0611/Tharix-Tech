import Image from "next/image";
import type { TeamMember } from "@/data/team";
import { BrandIcon } from "@/components/ui/BrandIcon";

/**
 * Team profile. Where a real person has not yet been supplied, the card
 * shows the role and an explicit placeholder — never an invented name,
 * biography or photograph.
 */
export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex flex-col border-b border-r border-[var(--line)] p-6 sm:p-8">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-sm)] border border-[var(--line)] bg-[var(--canvas)]">
        <div className="blueprint-fine absolute inset-0 opacity-70" aria-hidden />
        {member.photo && !member.isPlaceholder ? (
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.role} at Tharix Technologies`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span
              className="font-mono text-[2.5rem] font-light tracking-[-0.02em] text-[var(--fg-subtle)] opacity-45"
              aria-hidden
            >
              {member.monogram}
            </span>
            <span className="sr-only">Photograph pending</span>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-[1.0625rem] font-semibold tracking-[-0.02em]">
          {member.isPlaceholder ? (
            <span className="text-[var(--fg-subtle)]">Name to be confirmed</span>
          ) : (
            member.name
          )}
        </h3>
        <p className="mt-1 text-[0.875rem] font-medium text-[var(--accent)]">{member.role}</p>
        <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--fg-subtle)]">
          {member.focus}
        </p>
        <p className="mt-4 flex-1 text-[0.875rem] leading-[1.65] text-[var(--fg-muted)]">
          {member.bio}
        </p>

        {member.linkedin && !member.isPlaceholder && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-5 inline-grid size-9 place-items-center rounded-full border border-[var(--line)] text-[var(--fg-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <BrandIcon name="LinkedIn" />
          </a>
        )}
      </div>
    </article>
  );
}
