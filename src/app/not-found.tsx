import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { primaryNav } from "@/data/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or may have moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden pt-32">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(52% 46% at 22% 18%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 68%)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <Eyebrow index="404">Off the grid</Eyebrow>

            <h1 className="display-section mt-7 max-w-[16ch]">
              Looks like this page went{" "}
              <span className="text-[var(--accent)]">off the grid.</span>
            </h1>

            <p className="lead mt-7 max-w-[46ch]">
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/" size="lg" withArrow>
                Back Home
              </ButtonLink>
              <ButtonLink href="/work" size="lg" variant="secondary">
                Explore Our Work
              </ButtonLink>
            </div>
          </div>

          {/* A broken trace in the schematic language used across the site. */}
          <div className="glass glass-rim rounded-[var(--radius-md)] p-7">
            <p className="micro-label text-[var(--fg-subtle)]">Try one of these</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6">
              {primaryNav.map((item, i) => (
                <li key={item.href} className="border-t border-[var(--line)]">
                  <Link
                    href={item.href}
                    className="flex items-baseline gap-3 py-3 text-[0.9375rem] transition-colors hover:text-[var(--accent)]"
                  >
                    <span className="micro-label text-[var(--fg-subtle)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
