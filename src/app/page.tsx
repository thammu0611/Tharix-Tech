import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhyTharix } from "@/components/sections/WhyTharix";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTASection } from "@/components/sections/CTASection";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "Tharix Technologies designs and engineers high-performance websites, mobile applications, AI-powered solutions and scalable digital products for ambitious businesses.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs.slice(0, 6))) }}
      />

      <Hero />
      <StatsSection />
      <ServicesSection />
      <TechnologySection />
      <FeaturedWork />
      <WhyTharix />
      <ProcessTimeline />
      <IndustriesSection />
      <AboutTeaser />
      <TestimonialsSection />
      <FaqSection limit={6} />
      <CTASection />
    </>
  );
}
