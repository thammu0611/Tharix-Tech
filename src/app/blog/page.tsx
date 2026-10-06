import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CTASection } from "@/components/sections/CTASection";
import { postCategories, sortedPosts } from "@/data/posts";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Insights — Thoughts on Technology",
  description:
    "Engineering and design writing from Tharix Technologies on AI, web and mobile development, UI/UX, cloud, data and building early-stage products.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;
  const usedCategories = postCategories.filter((c) =>
    sortedPosts.some((p) => p.category === c),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow="Insights"
        index="01"
        title="Thoughts on technology."
        accentWords={["technology."]}
        lead="Practical writing from the people doing the work — what we have learned building products, and the decisions we would make differently."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      >
        <ul className="mt-10 flex flex-wrap gap-2">
          {usedCategories.map((category) => (
            <li
              key={category}
              className="rounded-full border border-[var(--line)] px-3.5 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--fg-muted)]"
            >
              {category}
            </li>
          ))}
        </ul>
      </PageHeader>

      <Section space="lg" bordered={false} className="pt-16 sm:pt-24">
        <Container>
          {featured && (
            <Reveal>
              <ArticleCard post={featured} featured className="mb-16 sm:mb-20" />
            </Reveal>
          )}

          <div className="grid gap-12 border-t border-[var(--line)] pt-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.07}>
                <ArticleCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Talk to us"
        title="Prefer a conversation to an article?"
        lead="If something here is relevant to a decision you are making, we are happy to talk it through before there is any commercial conversation."
        secondaryLabel="View our work"
        secondaryHref="/work"
      />
    </>
  );
}
