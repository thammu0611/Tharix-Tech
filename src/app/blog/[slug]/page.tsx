import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PostCover } from "@/components/visuals/PostCover";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CTASection } from "@/components/sections/CTASection";
import { getPost, posts, sortedPosts } from "@/data/posts";
import { articleJsonLd, breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    keywords: [post.category, "Tharix Technologies", "software engineering"],
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: post.title,
              description: post.excerpt,
              path: `/blog/${post.slug}`,
              date: post.date,
              author: post.author,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ),
        }}
      />

      <article>
        <header className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
          <div className="blueprint pointer-events-none absolute inset-0 opacity-60" aria-hidden />

          <Container width="narrow" className="relative">
            <Link
              href="/blog"
              className="arrow-shift inline-flex items-center gap-2 text-[0.8125rem] text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
              <span className="link-underline">All insights</span>
            </Link>

            <Reveal>
              <div className="mt-10 flex flex-wrap items-center gap-3 text-[0.75rem] text-[var(--fg-subtle)]">
                <span className="micro-label text-[var(--accent)]">{post.category}</span>
                <span aria-hidden className="h-px w-5 bg-[var(--line-strong)]" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
                <span aria-hidden>·</span>
                <span>{post.author}</span>
              </div>

              <h1 className="display-section mt-7">{post.title}</h1>

              <p className="lead mt-7">{post.excerpt}</p>
            </Reveal>
          </Container>
        </header>

        <Container width="narrow" className="mt-14">
          <Reveal>
            <div className="aspect-[16/7] overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)]">
              <PostCover cover={post.cover} title={post.title} className="h-full w-full" />
            </div>
          </Reveal>
        </Container>

        <Container width="narrow" className="py-16 sm:py-20">
          <div className="max-w-[68ch]">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="mt-14 text-[1.5rem] font-bold tracking-[-0.03em] first:mt-0 sm:text-[1.75rem]"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="mt-6 space-y-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[1.0625rem] leading-[1.72] text-[var(--fg-muted)]"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="my-12 border-l-2 border-[var(--accent)] pl-6 text-[1.25rem] font-medium leading-[1.5] tracking-[-0.02em] sm:text-[1.375rem]"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              return (
                <p
                  key={i}
                  className="mt-6 text-[1.0625rem] leading-[1.78] text-[var(--fg-muted)]"
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <Section tone="surface">
          <Container>
            <Eyebrow>More insights</Eyebrow>
            <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} post={item} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTASection
        eyebrow="Talk to us"
        title="Working on something like this?"
        lead="If this article touches a decision you are making, we are happy to talk it through."
        secondaryLabel="Read more insights"
        secondaryHref="/blog"
      />
    </>
  );
}
