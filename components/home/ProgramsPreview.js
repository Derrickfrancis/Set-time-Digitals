import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { programs } from "@/content/programs";

export default function ProgramsPreview() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-primary">
            Programs
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Choose a program, join the next cohort and build as you learn.
          </p>
        </Reveal>

        <ul className="mt-10 border-t border-line">
          {programs.map((p, i) => (
            <Reveal
              as="li"
              key={p.slug}
              delay={i * 100}
              className="grid gap-2 border-b border-line py-6 md:grid-cols-[1fr_2fr_auto] md:items-baseline md:gap-8"
            >
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="text-muted">{p.summary}</p>
              <p className="text-sm text-muted md:text-right">
                {p.duration} · {p.level}
              </p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-8">
          <ButtonLink href="/programs">See all programs</ButtonLink>
        </div>
      </div>
    </section>
  );
}
