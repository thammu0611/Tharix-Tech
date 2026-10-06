import type { ProjectVisual as VisualKey } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Abstract product mockups, drawn as SVG.
 *
 * These are deliberately non-literal: shapes and structure only, with no
 * invented figures, fake dashboards or stock photography. They convey the
 * *kind* of product without pretending to be a screenshot of a real one.
 */

const shell = "h-full w-full";

function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect width="400" height="260" rx="10" className="fill-[var(--surface)]" />
      <rect
        x="0.5"
        y="0.5"
        width="399"
        height="259"
        rx="9.5"
        fill="none"
        className="stroke-[var(--line)]"
      />
      <path d="M0 28h400" className="stroke-[var(--line)]" strokeWidth="1" />
      <circle cx="16" cy="14" r="3" className="fill-[var(--line-strong)]" />
      <circle cx="27" cy="14" r="3" className="fill-[var(--line-strong)]" />
      <circle cx="38" cy="14" r="3" className="fill-[var(--line-strong)]" />
      <rect x="56" y="9" width="120" height="10" rx="5" className="fill-[var(--line)]" />
      {children}
    </>
  );
}

function Commerce() {
  return (
    <Chrome>
      {/* Filter rail */}
      <rect x="16" y="44" width="72" height="10" rx="5" className="fill-[var(--line-strong)]" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect
            x="16"
            y={68 + i * 20}
            width="10"
            height="10"
            rx="2"
            className={i === 1 ? "fill-[var(--accent)]" : "fill-[var(--line)]"}
          />
          <rect
            x="32"
            y={70 + i * 20}
            width={i === 1 ? 50 : 40 + (i % 3) * 8}
            height="6"
            rx="3"
            className="fill-[var(--line)]"
          />
        </g>
      ))}
      {/* Product grid */}
      {[0, 1, 2].map((col) =>
        [0, 1].map((row) => (
          <g key={`${col}-${row}`}>
            <rect
              x={104 + col * 100}
              y={44 + row * 104}
              width="84"
              height="66"
              rx="6"
              className="fill-[var(--canvas)]"
            />
            <rect
              x={104 + col * 100}
              y={44 + row * 104}
              width="84"
              height="66"
              rx="6"
              fill="none"
              className="stroke-[var(--line)]"
            />
            <circle
              cx={146 + col * 100}
              cy={73 + row * 104}
              r="16"
              className={
                col === 1 && row === 0 ? "fill-[var(--accent-soft)]" : "fill-[var(--line)]"
              }
            />
            <rect
              x={104 + col * 100}
              y={116 + row * 104}
              width="58"
              height="6"
              rx="3"
              className="fill-[var(--line-strong)]"
            />
            <rect
              x={104 + col * 100}
              y={128 + row * 104}
              width="32"
              height="6"
              rx="3"
              className={
                col === 1 && row === 0 ? "fill-[var(--accent)]" : "fill-[var(--line)]"
              }
            />
          </g>
        )),
      )}
    </Chrome>
  );
}

function Analytics() {
  const bars = [28, 46, 34, 62, 50, 78, 58, 90, 70];
  return (
    <Chrome>
      <rect x="16" y="44" width="96" height="10" rx="5" className="fill-[var(--line-strong)]" />
      {/* Chart plot */}
      <g>
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M16 ${72 + i * 32}h240`}
            className="stroke-[var(--line)]"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        ))}
        {bars.map((h, i) => (
          <rect
            key={i}
            x={22 + i * 26}
            y={168 - h}
            width="14"
            height={h}
            rx="3"
            className={i === 7 ? "fill-[var(--accent)]" : "fill-[var(--line-strong)]"}
            opacity={i === 7 ? 1 : 0.55}
          />
        ))}
        <path
          d="M29 140 L55 126 L81 134 L107 106 L133 114 L159 88 L185 100 L211 70 L237 84"
          fill="none"
          className="stroke-[var(--accent)]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="211" cy="70" r="4" className="fill-[var(--accent)]" />
        <circle cx="211" cy="70" r="9" className="fill-[var(--accent)]" opacity="0.18" />
      </g>
      {/* Explanation panel */}
      <rect x="272" y="44" width="112" height="196" rx="7" className="fill-[var(--canvas)]" />
      <rect
        x="272"
        y="44"
        width="112"
        height="196"
        rx="7"
        fill="none"
        className="stroke-[var(--line)]"
      />
      <rect x="284" y="58" width="52" height="7" rx="3.5" className="fill-[var(--accent)]" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect
            x="284"
            y={80 + i * 26}
            width={i % 2 === 0 ? 88 : 66}
            height="6"
            rx="3"
            className="fill-[var(--line-strong)]"
            opacity="0.7"
          />
          <rect
            x="284"
            y={92 + i * 26}
            width={i % 2 === 0 ? 48 : 74}
            height="5"
            rx="2.5"
            className="fill-[var(--line)]"
          />
        </g>
      ))}
    </Chrome>
  );
}

function Health() {
  return (
    <>
      <rect width="400" height="260" rx="10" className="fill-[var(--canvas)]" />
      <rect
        x="0.5"
        y="0.5"
        width="399"
        height="259"
        rx="9.5"
        fill="none"
        className="stroke-[var(--line)]"
      />
      {/* Two phone frames */}
      {[
        { x: 96, y: 20 },
        { x: 216, y: 44 },
      ].map((p, idx) => (
        <g key={idx}>
          <rect
            x={p.x}
            y={p.y}
            width="96"
            height="196"
            rx="14"
            className="fill-[var(--surface)]"
          />
          <rect
            x={p.x + 0.5}
            y={p.y + 0.5}
            width="95"
            height="195"
            rx="13.5"
            fill="none"
            className="stroke-[var(--line-strong)]"
          />
          <rect
            x={p.x + 36}
            y={p.y + 8}
            width="24"
            height="4"
            rx="2"
            className="fill-[var(--line-strong)]"
          />
          {/* Header */}
          <rect
            x={p.x + 12}
            y={p.y + 26}
            width="52"
            height="8"
            rx="4"
            className="fill-[var(--line-strong)]"
          />
          {/* Primary card */}
          <rect
            x={p.x + 12}
            y={p.y + 44}
            width="72"
            height="44"
            rx="7"
            className={idx === 0 ? "fill-[var(--accent)]" : "fill-[var(--canvas)]"}
          />
          {idx === 1 && (
            <rect
              x={p.x + 12}
              y={p.y + 44}
              width="72"
              height="44"
              rx="7"
              fill="none"
              className="stroke-[var(--line)]"
            />
          )}
          <rect
            x={p.x + 22}
            y={p.y + 56}
            width="40"
            height="6"
            rx="3"
            fill={idx === 0 ? "var(--on-accent)" : "var(--line-strong)"}
            opacity={idx === 0 ? 0.9 : 1}
          />
          <rect
            x={p.x + 22}
            y={p.y + 68}
            width="26"
            height="5"
            rx="2.5"
            fill={idx === 0 ? "var(--on-accent)" : "var(--line)"}
            opacity={idx === 0 ? 0.6 : 1}
          />
          {/* List rows */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle
                cx={p.x + 20}
                cy={p.y + 106 + i * 22}
                r="6"
                className="fill-[var(--line)]"
              />
              <rect
                x={p.x + 32}
                y={p.y + 102 + i * 22}
                width={i % 2 === 0 ? 46 : 34}
                height="5"
                rx="2.5"
                className="fill-[var(--line-strong)]"
                opacity="0.75"
              />
              <rect
                x={p.x + 32}
                y={p.y + 111 + i * 22}
                width={i % 2 === 0 ? 28 : 40}
                height="4"
                rx="2"
                className="fill-[var(--line)]"
              />
            </g>
          ))}
        </g>
      ))}
      {/* Accessibility annotation ticks */}
      <path d="M40 60h36M40 60v140M40 200h36" className="stroke-[var(--accent)]" strokeWidth="1" opacity="0.5" />
      <circle cx="40" cy="130" r="3" className="fill-[var(--accent)]" />
    </>
  );
}

function Ops() {
  return (
    <Chrome>
      {/* Sidebar */}
      <rect x="0" y="28" width="76" height="232" className="fill-[var(--canvas)]" />
      <path d="M76 28v232" className="stroke-[var(--line)]" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect
            x="14"
            y={46 + i * 24}
            width={i === 2 ? 48 : 40}
            height="7"
            rx="3.5"
            className={i === 2 ? "fill-[var(--accent)]" : "fill-[var(--line-strong)]"}
            opacity={i === 2 ? 1 : 0.6}
          />
        </g>
      ))}
      {/* Kanban columns */}
      {[0, 1, 2].map((col) => (
        <g key={col}>
          <rect
            x={92 + col * 104}
            y={44}
            width="56"
            height="7"
            rx="3.5"
            className="fill-[var(--line-strong)]"
          />
          {[0, 1, 2].map((row) => {
            const active = col === 1 && row === 0;
            return (
              <g key={row}>
                <rect
                  x={92 + col * 104}
                  y={64 + row * 62}
                  width="92"
                  height="50"
                  rx="6"
                  className="fill-[var(--canvas)]"
                />
                <rect
                  x={92 + col * 104}
                  y={64 + row * 62}
                  width="92"
                  height="50"
                  rx="6"
                  fill="none"
                  className={active ? "stroke-[var(--accent)]" : "stroke-[var(--line)]"}
                />
                <rect
                  x={102 + col * 104}
                  y={74 + row * 62}
                  width="46"
                  height="6"
                  rx="3"
                  className="fill-[var(--line-strong)]"
                  opacity="0.8"
                />
                <rect
                  x={102 + col * 104}
                  y={86 + row * 62}
                  width="66"
                  height="5"
                  rx="2.5"
                  className="fill-[var(--line)]"
                />
                <rect
                  x={102 + col * 104}
                  y={98 + row * 62}
                  width="22"
                  height="8"
                  rx="4"
                  className={active ? "fill-[var(--accent)]" : "fill-[var(--line)]"}
                />
              </g>
            );
          })}
        </g>
      ))}
    </Chrome>
  );
}

const registry: Record<VisualKey, () => React.ReactElement> = {
  commerce: Commerce,
  analytics: Analytics,
  health: Health,
  ops: Ops,
};

export function ProjectVisual({
  visual,
  className,
  label,
}: {
  visual: VisualKey;
  className?: string;
  label: string;
}) {
  const Art = registry[visual];
  return (
    <svg
      viewBox="0 0 400 260"
      className={cn(shell, className)}
      role="img"
      aria-label={`Abstract interface illustration representing ${label}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <Art />
    </svg>
  );
}
