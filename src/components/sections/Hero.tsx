import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36" aria-labelledby="hero-heading">
      {/* Blueprint substrate + accent bloom */}
      <div className="blueprint pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[46rem]"
        aria-hidden
        style={{
          background:
            "radial-gradient(58% 52% at 15% 8%, color-mix(in oklab, var(--accent) 11%, transparent), transparent 68%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        aria-hidden
        style={{
          background: "linear-gradient(to bottom, transparent, var(--canvas))",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pb-24 xl:gap-20">
          {/* Copy */}
          <div className="max-w-[34rem] lg:max-w-none">
            <Reveal variant="fade">
              <p className="micro-label flex flex-wrap items-center gap-x-3 gap-y-2 text-[var(--fg-subtle)]">
                <span
                  aria-hidden
                  className="relative flex size-1.5"
                >
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[var(--accent)]" />
                </span>
                Tharix Technologies
                <span aria-hidden className="text-[var(--line-strong)]">•</span>
                <span className="text-[var(--fg-muted)]">Digital Product Engineering</span>
              </p>
            </Reveal>

            <h1 id="hero-heading" className="display-hero mt-7 max-w-[13ch] lg:max-w-[15ch]">
              <RevealText
                text="We build digital products that move businesses forward."
                accentWords={["digital", "products"]}
                delay={0.1}
              />
            </h1>

            <Reveal delay={0.55}>
              <p className="lead mt-8 max-w-[54ch]">
                We design and engineer high-performance websites, mobile applications,
                AI-powered solutions, and scalable digital products for ambitious businesses.
              </p>
            </Reveal>

            <Reveal delay={0.64}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact" size="lg" withArrow>
                  Start a Project
                </ButtonLink>
                <ButtonLink href="/work" size="lg" variant="secondary">
                  Explore Our Work
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.72}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[var(--line)] pt-6">
                {siteConfig.disciplines.map((item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    {i > 0 && (
                      <span aria-hidden className="text-[var(--line-strong)]">
                        •
                      </span>
                    )}
                    <span className="micro-label text-[var(--fg-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={0.35} variant="fade">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
