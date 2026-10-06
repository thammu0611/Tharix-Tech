import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/LegalDocument";
import { privacySections } from "@/data/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Tharix Technologies collects, uses, retains and protects information submitted through this website, and how to exercise your rights over it.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy policy"
      eyebrow="Legal"
      lead="What we collect through this website, why, how long we keep it, and what you can ask us to do with it."
      path="/privacy"
      sections={privacySections}
    />
  );
}
