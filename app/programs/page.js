import PageHeader from "@/components/ui/PageHeader";
import ButtonLink from "@/components/ui/ButtonLink";
import { programs } from "@/content/programs";

export const metadata = {
  title: "Programs",
  description:
    "Tech programs taught in cohorts, with a project and a certificate at the end.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader title="Programs">
        Every program is taught in cohorts and ends with a project and a
        certificate.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <ul className="border-t border-line">
          {programs.map((p) => (
            <li
              key={p.slug}
              id={p.slug}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold">{p.name}</h2>
                <p className="mt-1 text-sm text-muted">
                  {p.duration} · {p.level}
                </p>
              </div>
              <p className="text-muted">{p.summary}</p>
              <ButtonLink href="/contact" variant="outline" size="sm">
                Ask about this program
              </ButtonLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
