import ButtonLink from "@/components/ui/ButtonLink";
import HeroVisual from "@/components/home/HeroVisuals";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Decorative backdrop */}
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div aria-hidden="true" className="glow glow-a" />
      <div aria-hidden="true" className="glow glow-b" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div>
          <h1 className="rise font-display text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Learn to build technology. Or hire the people who do.
          </h1>
          <p
            className="rise mt-6 max-w-xl text-lg text-muted"
            style={{ "--rise-delay": "0.15s" }}
          >
            {site.name} trains students in practical tech skills and builds
            websites, apps and security solutions for businesses.
          </p>
          <div
            className="rise mt-8 flex flex-wrap gap-3"
            style={{ "--rise-delay": "0.3s" }}
          >
            <ButtonLink href="/programs">Start learning</ButtonLink>
            <ButtonLink href="/tech-solutions" variant="outline">
              Hire us
            </ButtonLink>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
