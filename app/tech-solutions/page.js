import PageHeader from "@/components/ui/PageHeader";
import ButtonLink from "@/components/ui/ButtonLink";
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
        <ul className="border-t border-line">
          {services.map((s) => (
            <li
              key={s.slug}
              id={s.slug}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-[1fr_2fr] md:gap-8"
            >
              <h2 className="font-display text-2xl font-bold">{s.name}</h2>
              <div>
                <p className="text-muted">{s.summary}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 marker:text-accent">
                  {s.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
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
