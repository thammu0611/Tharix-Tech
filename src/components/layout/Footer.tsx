import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/Logo";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { footerNav } from "@/data/navigation";
import { contact, isLive, siteConfig, socials } from "@/data/site";

const year = new Date().getFullYear();

export function Footer() {
  const liveSocials = socials.filter((s) => s.status === "confirmed");

  return (
    <footer className="relative border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <Container className="relative">
        {/* Masthead */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_2fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="size-8" />
              <p className="text-[1.05rem] font-extrabold uppercase tracking-[0.16em]">
                Tharix
                <span className="ml-2 font-mono text-[0.6rem] font-medium tracking-[0.28em] text-[var(--fg-subtle)]">
                  TECHNOLOGIES
                </span>
              </p>
            </div>

            <p className="mt-6 max-w-[34ch] text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-[1.625rem]">
              {siteConfig.tagline}
            </p>

            <address className="mt-8 space-y-2 text-sm not-italic text-[var(--fg-muted)]">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--fg-subtle)]" aria-hidden />
                {contact.location.value}
              </p>
              {isLive(contact.email) ? (
                <p>
                  <a
                    href={contact.email.href}
                    className="link-underline transition-colors hover:text-[var(--accent)]"
                  >
                    {contact.email.value}
                  </a>
                </p>
              ) : (
                <p className="text-[var(--fg-subtle)]">
                  Email — tharixtechnologies@gmail.com
                </p>
              )}
              {isLive(contact.phone) ? (
                <p>{contact.phone.value}</p>
              ) : (
                <p className="text-[var(--fg-subtle)]">Phone — 9080447820/8754516846</p>
              )}
            </address>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
            {Object.values(footerNav).map((group) => (
              <div key={group.title}>
                <h2 className="micro-label text-[var(--fg-subtle)]">{group.title}</h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.875rem] text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div className="border-t border-[var(--line)] py-6">
          {liveSocials.length > 0 ? (
            <ul className="flex flex-wrap items-center gap-2">
              {liveSocials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Tharix Technologies on ${social.label}`}
                    className="grid size-10 place-items-center rounded-full border border-[var(--line)] text-[var(--fg-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <BrandIcon name={social.label} />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              <ul className="flex items-center gap-2" aria-hidden>
                {socials.map((social) => (
                  <li
                    key={social.label}
                    title={`${social.label} — profile URL not yet configured`}
                    className="grid size-10 place-items-center rounded-full border border-dashed border-[var(--line)] text-[var(--fg-subtle)] opacity-60"
                  >
                    <BrandIcon name={social.label} />
                  </li>
                ))}
              </ul>
              <p className="text-[0.75rem] text-[var(--fg-subtle)]">
                Social profiles — add verified URLs in{" "}
                <code className="font-mono text-[0.7rem]">src/data/site.ts</code>
              </p>
            </div>
          )}
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3 border-t border-[var(--line)] py-6 text-[0.75rem] text-[var(--fg-subtle)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Tharix Technologies. All rights reserved.</p>
          <p className="font-mono tracking-[0.08em]">
            Built with technology. Designed for impact.
          </p>
        </div>
      </Container>
    </footer>
  );
}
