"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The hero visual: an abstract system schematic.
 *
 * Six labelled nodes — the layers of a digital product — connected by
 * orthogonal signal paths, drawn on the blueprint grid used throughout the
 * site and mounted inside a liquid-glass panel. No stock imagery, no 3D
 * render, nothing decorative that does not describe what the company does.
 */

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  accent?: boolean;
}

const nodes: Node[] = [
  { id: "design", label: "Design", x: 72, y: 62 },
  { id: "code", label: "Code", x: 72, y: 214 },
  { id: "api", label: "APIs", x: 224, y: 138, accent: true },
  { id: "ai", label: "AI", x: 376, y: 62 },
  { id: "cloud", label: "Cloud", x: 376, y: 214 },
  { id: "data", label: "Data", x: 224, y: 288 },
];

/** Orthogonal routes — the schematic reads as a wiring diagram, not a web. */
const paths = [
  "M112 62 H184 V138",
  "M112 214 H184 V138",
  "M264 138 H336 V62",
  "M264 138 H336 V214",
  "M224 178 V288",
  "M112 62 H140 V30 H408 V62 H376",
];

export function HeroVisual({ className }: { className?: string }) {

  return (
    <div
      className={cn(
        "glass glass-rim relative overflow-hidden rounded-[var(--radius-lg)]",
        className,
      )}
    >
      {/* Blueprint substrate */}
      <div className="blueprint-fine pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 62%)",
        }}
      />

      <svg
        viewBox="0 0 448 356"
        className="relative block h-auto w-full"
        role="img"
        aria-label="Schematic of a digital product system: design and code feeding an API layer, which connects to AI, cloud and data services."
      >
        {/* Signal paths */}
        <g
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="1.25"
          strokeLinecap="square"
        >
          {paths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* Flowing signal — the only continuous motion on the page.
            The global prefers-reduced-motion rule collapses these CSS
            animations to nothing, so no conditional rendering is needed. */}
        <g fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round">
          {paths.slice(0, 5).map((d, i) => (
            <path
              key={i}
              d={d}
              strokeDasharray="18 302"
              style={{
                animation: `tharix-dash ${7 + i * 1.4}s linear infinite`,
                animationDelay: `${i * 0.85}s`,
                opacity: 0.85,
              }}
            />
          ))}
        </g>

        {/* Junction ticks */}
        {[
          [184, 62],
          [184, 214],
          [336, 62],
          [336, 214],
          [140, 30],
          [408, 30],
        ].map(([x, y], i) => (
          <g key={i} stroke="var(--line-strong)" strokeWidth="1">
            <path d={`M${x - 3} ${y} H${x + 3}`} />
            <path d={`M${x} ${y - 3} V${y + 3}`} />
          </g>
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.09, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            <rect
              x={node.x - 40}
              y={node.y - 20}
              width="80"
              height="40"
              rx="8"
              fill="var(--surface)"
              stroke={node.accent ? "var(--accent)" : "var(--line-strong)"}
              strokeWidth={node.accent ? 1.5 : 1}
            />
            {node.accent && (
              <rect
                x={node.x - 40}
                y={node.y - 20}
                width="80"
                height="40"
                rx="8"
                fill="var(--accent)"
                opacity="0.08"
              />
            )}
            <circle
              cx={node.x - 27}
              cy={node.y}
              r="3"
              fill={node.accent ? "var(--accent)" : "var(--fg-subtle)"}
              style={{
                animation: `tharix-pulse ${3 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.35}s`,
                transformOrigin: `${node.x - 27}px ${node.y}px`,
              }}
            />
            <text
              x={node.x - 16}
              y={node.y + 4}
              fill="var(--fg)"
              fontSize="11.5"
              fontWeight="600"
              letterSpacing="0.02em"
              fontFamily="var(--font-sans)"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Frame annotation */}
        <text
          x="16"
          y="342"
          fill="var(--fg-subtle)"
          fontSize="9"
          letterSpacing="0.18em"
          fontFamily="var(--font-mono)"
        >
          SYSTEM SCHEMATIC — PRODUCT ARCHITECTURE
        </text>
        <text
          x="432"
          y="342"
          textAnchor="end"
          fill="var(--fg-subtle)"
          fontSize="9"
          letterSpacing="0.18em"
          fontFamily="var(--font-mono)"
        >
          THX / 001
        </text>
      </svg>
    </div>
  );
}
