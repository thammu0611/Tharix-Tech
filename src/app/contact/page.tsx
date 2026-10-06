import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderNote } from "@/components/ui/States";
import { ContactForm, ContactFormSkeleton } from "@/components/forms/ContactForm";
import { contact, isLive } from "@/data/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact — Start a Project",
  description:
    "Tell Tharix Technologies what you're building or what you're trying to solve. We reply to project enquiries within one business day.",
  path: "/contact",
});

const details = [
  { key: "location", icon: MapPin, field: contact.location },
  { key: "email", icon: Mail, field: contact.email },
  { key: "phone", icon: Phone, field: contact.phone },
] as const;

export default function ContactPage() {
  const anyPlaceholder = details.some((d) => !isLive(d.field));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow="Contact"
        index="01"
        title="Have an idea? Let's build it."
        accentWords={["build", "it."]}
        lead="Tell us what you're building, what you're trying to solve, or where you want to go next. We'll help you find the right technology approach."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <Section space="lg" bordered={false} className="pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            {/* Details */}
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <Reveal>
                <dl className="flex flex-col gap-7">
                  {details.map(({ key, icon: Icon, field }) => (
                    <div key={key} className="border-t border-[var(--line)] pt-5">
                      <dt className="micro-label flex items-center gap-2 text-[var(--fg-subtle)]">
                        <Icon className="size-3.5" aria-hidden />
                        {field.label}
                      </dt>
                      <dd className="mt-3 text-[1.0625rem] leading-snug">
                        {isLive(field) ? (
                          field.href ? (
                            <a
                              href={field.href}
                              className="link-underline transition-colors hover:text-[var(--accent)]"
                            >
                              {field.value}
                            </a>
                          ) : (
                            field.value
                          )
                        ) : (
                          <span className="text-[var(--fg-subtle)]">
                            {key === "phone"
                              ? "Phone number to be confirmed"
                              : `${field.value} — pending confirmation`}
                          </span>
                        )}
                      </dd>
                    </div>
                  ))}

                  <div className="border-t border-[var(--line)] pt-5">
                    <dt className="micro-label flex items-center gap-2 text-[var(--fg-subtle)]">
                      <Clock className="size-3.5" aria-hidden />
                      Hours
                    </dt>
                    <dd className="mt-3 text-[1.0625rem] leading-snug">{contact.hours}</dd>
                    <p className="mt-2 text-[0.8125rem] text-[var(--fg-muted)]">
                      {contact.responseTime}
                    </p>
                  </div>
                </dl>
              </Reveal>

              {anyPlaceholder && (
                <Reveal delay={0.1}>
                  <PlaceholderNote className="mt-8">
                    Contact details marked as pending have not yet been confirmed as active.
                    The enquiry form below is fully functional and is the reliable route to
                    the team. Update the values in{" "}
                    <code className="font-mono text-[0.7rem]">src/data/site.ts</code> and set{" "}
                    <code className="font-mono text-[0.7rem]">status: &quot;confirmed&quot;</code>.
                  </PlaceholderNote>
                </Reveal>
              )}
            </div>

            {/* Form */}
            <Reveal delay={0.08}>
              <div className="glass glass-rim rounded-[var(--radius-lg)] p-6 sm:p-10">
                <h2 className="text-[1.375rem] font-bold tracking-[-0.03em]">
                  Tell us about the project
                </h2>
                <p className="mt-2 max-w-[52ch] text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                  The more context you give, the more useful our first reply will be. Fields
                  marked with an asterisk are required.
                </p>

                <div className="mt-8">
                  <Suspense fallback={<ContactFormSkeleton />}>
                    <ContactForm />
                  </Suspense>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
