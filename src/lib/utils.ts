/** Tiny class-name joiner. Avoids pulling clsx/tailwind-merge for this scale. */
export function cn(...parts: unknown[]): string {
  return parts.filter((p): p is string => typeof p === "string" && p.length > 0).join(" ");
}

export function formatDate(iso: string, locale = "en-GB"): string {
  return new Date(iso).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Estimate reading time from a word count at 220 wpm. */
export function readingTime(words: number): string {
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

/** Strip anything that could be interpreted as a header injection. */
export function sanitiseHeaderValue(input: string): string {
  return input.replace(/[\r\n]+/g, " ").trim();
}

/** Collapse whitespace and hard-limit length before persisting or emailing. */
export function sanitiseText(input: string, max = 5000): string {
  return input.replace(/\s+/g, " ").trim().slice(0, max);
}
