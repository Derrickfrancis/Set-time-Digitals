import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";

function Tick({ className }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`mt-1 h-4 w-4 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 10.5l4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Panel({ bg, tick, title, text, points, href, cta }) {
  return (
    <div
      className={`flex h-full flex-col rounded-lg p-8 text-white transition-transform duration-300 motion-safe:hover:-translate-y-1 ${bg}`}
    >
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <p className="mt-3 text-white/90">{text}</p>
      <ul className="mt-6 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex gap-3">
            <Tick className={tick} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink href={href} variant="light">
          {cta}
        </ButtonLink>
      </div>
    </div>
  );
}

export default function TwoPaths() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-primary">
          Two ways to work with us
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal>
          <Panel
            bg="bg-brand-purple"
            tick="text-brand-gold"
            title="For students"
            text="Classes that end with something you built."
            points={[
              "Instructor-led classes in small cohorts",
              "Projects you can show to employers",
              "Certificates you can verify online",
            ]}
            href="/programs"
            cta="Browse programs"
          />
        </Reveal>
        <Reveal delay={150}>
          <Panel
            bg="bg-brand-teal"
            tick="text-brand-lime"
            title="For businesses"
            text="Technology built around how your business works."
            points={[
              "Websites and web applications",
              "Cybersecurity assessments and setup",
              "IT consulting and support",
            ]}
            href="/tech-solutions"
            cta="Request a quote"
          />
        </Reveal>
      </div>
    </section>
  );
}
