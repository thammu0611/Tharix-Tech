import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { contact, isLive } from "@/data/site";

/**
 * The closing conversion band. One primary action, one secondary, and the
 * honest response-time statement — no urgency theatre.
 */
export function CTASection({
  eyebrow = "Start here",
  title = "Have an idea? Let's build it.",
  lead = "Tell us what you're building, what you're trying to solve, or where you want to go next. We'll help you find the right technology approach.",
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Work",
  secondaryHref = "/work",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--color-ink-950)] text-[var(--color-paper-100)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 70% at 78% 20%, rgba(92,147,255,0.22), transparent 65%)",
        }}
      />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow className="!text-white/45">{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display-section mt-7 max-w-[16ch] text-white">{title}</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[52ch] text-[1.0625rem] leading-[1.62] text-white/62 sm:text-[1.125rem]">
                {lead}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={primaryHref} size="lg" withArrow variant="inverse">
                  {primaryLabel}
                </ButtonLink>
                <ButtonLink
                  href={secondaryHref}
                  size="lg"
                  variant="secondary"
                  className="!border-white/18 !bg-white/[0.06] !text-white hover:!border-white/32"
                >
                  {secondaryLabel}
                </ButtonLink>
              </div>

              <dl className="grid gap-4 border-t border-white/12 pt-6 text-sm sm:grid-cols-2">
                <div>
                  <dt className="micro-label text-white/40">Based in</dt>
                  <dd className="mt-2 text-white/80">{contact.location.value}</dd>
                </div>
                <div>
                  <dt className="micro-label text-white/40">Response</dt>
                  <dd className="mt-2 text-white/80">
                    {isLive(contact.email)
                      ? contact.responseTime
                      : "We reply to project enquiries within one business day."}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
