import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/LegalDocument";
import { termsSections } from "@/data/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description:
    "The terms governing use of the Tharix Technologies website, including content accuracy, intellectual property and liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of use"
      eyebrow="Legal"
      lead="The terms that apply to this website. Client engagements are governed by a separate signed agreement."
      path="/terms"
      sections={termsSections}
    />
  );
}
