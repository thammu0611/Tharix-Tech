"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme, type ThemeChoice } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const options: Array<{ value: ThemeChoice; label: string; Icon: typeof Sun }> = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

/**
 * Segmented three-way theme control. A segmented control rather than a
 * single toggle so "follow my system" stays an explicit, discoverable
 * choice rather than a hidden default.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, mounted } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={cn(
        "glass glass-rim relative inline-flex items-center gap-0.5 rounded-full p-0.5",
        className,
      )}
    >
      {options.map(({ value, label, Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`${label} theme`}
            title={`${label} theme`}
            onClick={() => setTheme(value)}
            className={cn(
              "relative grid size-7 place-items-center rounded-full transition-all duration-300 [transition-timing-function:var(--ease-out-expo)]",
              active
                ? "bg-[var(--fg)] text-[var(--canvas)]"
                : "text-[var(--fg-subtle)] hover:text-[var(--fg)]",
            )}
          >
            <Icon className="size-3.5" aria-hidden />
          </button>
        );
      })}
    </div>
  );
}
