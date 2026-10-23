import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import ButtonLink from "@/components/ui/ButtonLink";
import Picture from "@/components/ui/Picture";
import Reveal from "@/components/ui/Reveal";
import { programs } from "@/content/programs";

export const metadata = {
  title: "Programs",
  description:
    "Front End, Back End, UI/UX, Full Stack, Digital Marketing, Data Analysis, Graphic Design, Cybersecurity and our Summer Coding Bootcamp.",
};

export default function ProgramsPage() {
  const bySlug = Object.fromEntries(programs.map((p) => [p.slug, p]));

  return (
    <>
      <PageHeader title="Programs">
        Choose the path that fits your goals. Not sure which one is right for
        you? Talk to us and we will help you decide.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <ul className="space-y-8">
          {programs.map((p, i) => (
            <Reveal
              as="li"
              key={p.slug}
              delay={(i % 3) * 60}
              className="scroll-mt-28 overflow-hidden rounded-xl border border-line bg-bg"
            >
              <div id={p.slug} className="scroll-mt-28" />
              <div className="grid md:grid-cols-[20rem_1fr]">
                <Picture
                  image={p.image}
                  art={p.art}
                  alt={`${p.name} program`}
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="rounded-none md:aspect-auto md:min-h-56"
                />
                <div className="p-6 md:p-8">
                  <h2 className="font-display text-2xl font-bold">{p.name}</h2>
                  {(p.duration || p.level) && (
                    <p className="mt-2 flex flex-wrap gap-2">
                      {[p.duration, p.level].filter(Boolean).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </p>
                  )}
                  <p className="mt-3 text-lg text-muted">{p.summary}</p>

                  {p.includes && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold">Includes</p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {p.includes.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={`#${slug}`}
                              className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-fg hover:opacity-90"
                            >
                              {bySlug[slug].name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6">
                    <ButtonLink href="/contact" variant="outline" size="sm">
                      Ask about this program
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
