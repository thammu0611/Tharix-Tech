import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/data/posts";
import { PostCover } from "@/components/visuals/PostCover";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function ArticleCard({
  post,
  featured = false,
  className,
}: {
  post: Post;
  featured?: boolean;
  className?: string;
}) {
  return (
    <article className={cn("group", className)}>
      <Link href={`/blog/${post.slug}`} className="block">
        <div
          className={cn(
            "overflow-hidden rounded-[var(--radius-md)] border border-[var(--line)]",
            featured ? "aspect-[16/8]" : "aspect-[16/9]",
          )}
        >
          <PostCover
            cover={post.cover}
            title={post.title}
            className="h-full w-full transition-transform duration-[900ms] [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-5">
          <div className="flex flex-wrap items-center gap-3 text-[0.75rem] text-[var(--fg-subtle)]">
            <span className="micro-label text-[var(--accent)]">{post.category}</span>
            <span aria-hidden className="h-px w-4 bg-[var(--line-strong)]" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>

          <h3
            className={cn(
              "mt-3 font-bold tracking-[-0.028em] transition-colors group-hover:text-[var(--accent)]",
              featured ? "text-[1.625rem] sm:text-[2rem]" : "text-[1.1875rem] sm:text-[1.3125rem]",
            )}
          >
            {post.title}
          </h3>

          <p className="mt-2.5 max-w-[56ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center justify-between gap-4">
            <span className="text-[0.75rem] text-[var(--fg-subtle)]">{post.author}</span>
            <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium transition-colors group-hover:text-[var(--accent)]">
              Read Article
              <ArrowUpRight
                className="size-3.5 transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
