import type { Post } from "@/data/posts";
import { cn } from "@/lib/utils";

/**
 * Generated article artwork.
 *
 * Six abstract compositions built from the same geometric vocabulary as
 * the rest of the site. No stock photography, and nothing that pretends to
 * illustrate something it does not.
 */

type Cover = Post["cover"];

const art: Record<Cover, React.ReactNode> = {
  grid: (
    <>
      {Array.from({ length: 7 }).map((_, r) =>
        Array.from({ length: 12 }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={16 + c * 30}
            y={16 + r * 22}
            width={18}
            height={10}
            rx={2}
            className={
              (r * 12 + c) % 17 === 0 ? "fill-[var(--accent)]" : "fill-[var(--line-strong)]"
            }
            opacity={(r * 12 + c) % 17 === 0 ? 1 : 0.28 + ((r + c) % 5) * 0.07}
          />
        )),
      )}
    </>
  ),
  wave: (
    <>
      {Array.from({ length: 14 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${40 + i * 10} C 100 ${20 + i * 10}, 260 ${72 + i * 10}, 380 ${34 + i * 10}`}
          fill="none"
          className={i === 9 ? "stroke-[var(--accent)]" : "stroke-[var(--line-strong)]"}
          strokeWidth={i === 9 ? 1.8 : 1}
          opacity={i === 9 ? 1 : 0.4}
        />
      ))}
    </>
  ),
  orbit: (
    <>
      {[40, 66, 92, 118, 144].map((r, i) => (
        <circle
          key={r}
          cx="190"
          cy="95"
          r={r}
          fill="none"
          className={i === 2 ? "stroke-[var(--accent)]" : "stroke-[var(--line-strong)]"}
          strokeWidth="1"
          opacity={i === 2 ? 0.9 : 0.35}
          strokeDasharray={i % 2 ? "3 6" : undefined}
        />
      ))}
      <circle cx="190" cy="95" r="6" className="fill-[var(--accent)]" />
      <circle cx="282" cy="95" r="4" className="fill-[var(--fg-subtle)]" />
      <circle cx="190" cy="-23" r="4" className="fill-[var(--fg-subtle)]" />
      <circle cx="124" cy="152" r="4" className="fill-[var(--fg-subtle)]" />
    </>
  ),
  stack: (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={i}
          x={54 + i * 8}
          y={22 + i * 22}
          width={260 - i * 16}
          height={16}
          rx={4}
          className={i === 3 ? "fill-[var(--accent)]" : "fill-[var(--line-strong)]"}
          opacity={i === 3 ? 1 : 0.32 + i * 0.08}
        />
      ))}
    </>
  ),
  flow: (
    <>
      <path
        d="M40 40 H140 V95 H240 V150 H340"
        fill="none"
        className="stroke-[var(--line-strong)]"
        strokeWidth="1.4"
      />
      <path
        d="M40 150 H140 V95 H240 V40 H340"
        fill="none"
        className="stroke-[var(--accent)]"
        strokeWidth="1.6"
      />
      {[
        [40, 40],
        [140, 95],
        [240, 95],
        [340, 150],
        [40, 150],
        [340, 40],
      ].map(([x, y], i) => (
        <rect
          key={i}
          x={x - 9}
          y={y - 9}
          width="18"
          height="18"
          rx="3"
          className={i === 1 || i === 2 ? "fill-[var(--accent)]" : "fill-[var(--line-strong)]"}
        />
      ))}
    </>
  ),
  pulse: (
    <>
      {Array.from({ length: 30 }).map((_, i) => {
        const h = 12 + Math.abs(Math.sin(i * 0.9)) * 88;
        return (
          <rect
            key={i}
            x={22 + i * 12}
            y={95 - h / 2}
            width="5"
            height={h}
            rx="2.5"
            className={i === 19 ? "fill-[var(--accent)]" : "fill-[var(--line-strong)]"}
            opacity={i === 19 ? 1 : 0.35}
          />
        );
      })}
    </>
  ),
};

export function PostCover({
  cover,
  title,
  className,
}: {
  cover: Cover;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--surface)]",
        className,
      )}
    >
      <div className="blueprint-fine absolute inset-0 opacity-60" aria-hidden />
      <svg
        viewBox="0 0 380 190"
        className="relative block h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label={`Abstract cover artwork for the article “${title}”`}
      >
        {art[cover]}
      </svg>
    </div>
  );
}
