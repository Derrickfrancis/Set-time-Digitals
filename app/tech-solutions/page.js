import PageHeader from "@/components/ui/PageHeader";
import ButtonLink from "@/components/ui/ButtonLink";
import Picture from "@/components/ui/Picture";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/content/services";

export const metadata = {
  title: "Tech Solutions",
  description:
    "Websites, applications, cybersecurity and IT consulting for businesses.",
};

export default function TechSolutionsPage() {
  return (
    <>
      <PageHeader title="Tech Solutions">
        Technology built around how your business works, from first idea to
        ongoing support.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <ul className="space-y-8">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.slug}
              delay={(i % 3) * 80}
              className="overflow-hidden rounded-xl border border-line bg-bg"
            >
              <div id={s.slug} className="scroll-mt-28" />
              <div className="grid md:grid-cols-[20rem_1fr]">
                <Picture
                  image={s.image}
                  art={s.art}
                  alt={`${s.name} service`}
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="rounded-none md:aspect-auto md:min-h-56"
                />
                <div className="p-6 md:p-8">
                  <h2 className="font-display text-2xl font-bold">{s.name}</h2>
                  <p className="mt-3 text-lg text-muted">{s.summary}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 marker:text-accent">
                    {s.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <ButtonLink href="/contact" variant="outline" size="sm">
                      Ask about this service
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-brand-teal text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold">
              Have a project in mind?
            </h2>
            <p className="mt-2 max-w-xl text-white/90">
              Tell us what you need and we will come back to you with a plan and
              a quote.
            </p>
          </div>
          <ButtonLink href="/contact" variant="light">
            Request a quote
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
