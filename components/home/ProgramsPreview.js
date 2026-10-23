import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Picture from "@/components/ui/Picture";
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

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 2) * 100}>
              <Link
                href={`/programs#${p.slug}`}
                className="group flex h-full items-center gap-4 rounded-lg border border-line bg-bg p-3 transition-transform duration-300 motion-safe:hover:-translate-y-0.5"
              >
                <Picture
                  image={p.image}
                  art={p.art}
                  alt={`${p.name} program`}
                  sizes="128px"
                  className="w-28 shrink-0 sm:w-32"
                />
                <span className="min-w-0">
                  <span className="block font-display text-lg font-bold group-hover:underline">
                    {p.name}
                  </span>
                  {(p.duration || p.level) && (
                    <span className="mt-0.5 block text-sm font-medium text-primary">
                      {[p.duration, p.level].filter(Boolean).join(" · ")}
                    </span>
                  )}
                  <span className="mt-1 line-clamp-2 block text-sm text-muted">
                    {p.summary}
                  </span>
                </span>
              </Link>
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
