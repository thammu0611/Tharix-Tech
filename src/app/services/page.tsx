import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services — Web, Mobile, AI, Cloud & Custom Software",
  description:
    "Web development, mobile apps, UI/UX design, AI and machine learning, custom software and cloud engineering. Six service areas, delivered by one team.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow="What we do"
        index="01"
        title="From idea to digital product."
        accentWords={["digital", "product."]}
        lead="We combine strategy, design and engineering to create digital experiences built for real-world impact. Most engagements draw on several of these areas — a product needs design, an interface, a service layer and somewhere to run."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <div className="mt-20 overflow-hidden border-t border-[var(--line)] sm:mt-28">
        <div className="-mr-px grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              className="border-r border-[var(--line)]"
            />
          ))}
        </div>
      </div>

      <ProcessTimeline />
      <TechnologySection />
      <CTASection
        eyebrow="Next step"
        title="Not sure which of these you need?"
        lead="Describe the problem rather than the solution. We will tell you what it actually needs — including when that is less than you expected."
      />
    </>
  );
}
