import { cn } from "@/lib/utils";

/**
 * Minimal brand glyphs, drawn in-house. Keeps the footer free of
 * third-party icon packages and inconsistent logo weights.
 */
const paths: Record<string, React.ReactNode> = {
  LinkedIn: (
    <>
      <path d="M4.5 6.6a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Z" />
      <path d="M2.7 8.4h3.6V21H2.7z" />
      <path d="M9.3 8.4h3.45v1.72h.05c.48-.87 1.66-1.79 3.41-1.79 3.65 0 4.32 2.3 4.32 5.3V21h-3.6v-6.3c0-1.5-.03-3.44-2.13-3.44-2.13 0-2.46 1.63-2.46 3.33V21H9.3z" />
    </>
  ),
  Instagram: (
    <>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" fill="none" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="4.1" fill="none" strokeWidth="1.9" />
      <circle cx="17.2" cy="6.8" r="1.25" />
    </>
  ),
  GitHub: (
    <path d="M12 2.2A9.8 9.8 0 0 0 8.9 21.3c.49.09.67-.21.67-.47v-1.8c-2.73.59-3.3-1.16-3.3-1.16-.45-1.13-1.09-1.43-1.09-1.43-.89-.6.07-.59.07-.59.98.07 1.5 1.01 1.5 1.01.87 1.5 2.29 1.07 2.85.82.09-.63.34-1.07.62-1.31-2.18-.25-4.47-1.09-4.47-4.84 0-1.07.38-1.95 1.01-2.63-.1-.25-.44-1.25.1-2.6 0 0 .82-.27 2.7 1a9.3 9.3 0 0 1 4.92 0c1.87-1.27 2.7-1 2.7-1 .54 1.35.2 2.35.1 2.6.63.68 1.01 1.56 1.01 2.63 0 3.76-2.3 4.59-4.49 4.83.35.31.67.91.67 1.85v2.74c0 .26.18.57.68.47A9.8 9.8 0 0 0 12 2.2Z" />
  ),
  X: (
    <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.62-6.04L5.94 21H2.92l7.06-8.07L2.4 3h6.05l4.18 5.52L17.53 3Zm-1.06 16.17h1.67L7.62 4.73H5.83l10.64 14.44Z" />
  ),
};

export function BrandIcon({
  name,
  className,
}: {
  name: keyof typeof paths | string;
  className?: string;
}) {
  const path = paths[name];
  if (!path) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-[1.05rem]", className)}
      fill="currentColor"
      stroke="currentColor"
      aria-hidden
      focusable="false"
    >
      {path}
    </svg>
  );
}
