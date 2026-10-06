import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/sections/CTASection";
import { faqs } from "@/data/faq";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Answers on services, process, cost, timelines, design, maintenance, AI integration and modernising existing applications — from Tharix Technologies.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "FAQ", path: "/faq" },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow="Questions"
        index="01"
        title="Frequently asked questions."
        accentWords={["questions."]}
        lead="The questions we are asked most often, answered directly. If yours is not here, ask it — we answer scoping questions before there is a commercial conversation."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <Section space="lg" bordered={false} className="pt-16 sm:pt-20">
        <Container width="narrow">
          <Accordion items={faqs} />
        </Container>
      </Section>

      <CTASection
        eyebrow="Still unsure"
        title="Ask us the question that isn't here."
        secondaryLabel="See our services"
        secondaryHref="/services"
      />
    </>
  );
}
