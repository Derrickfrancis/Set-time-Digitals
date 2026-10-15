import PageHeader from "@/components/ui/PageHeader";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "Who we are, what we do and what we stand for.",
};

// PLACEHOLDER wording. Replace with the institute's real story and values.
const values = [
  {
    title: "Practical first",
    text: "We teach and build things that work in the real world.",
  },
  {
    title: "Open to everyone",
    text: "Good tech education should be within reach of anyone willing to learn.",
  },
  {
    title: "Built with care",
    text: "We take quality, security and honesty seriously in everything we deliver.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About us">
        {site.name} teaches practical tech skills and builds technology for
        businesses.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <h2 className="font-display text-3xl font-bold text-primary">
          Our mission
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          We exist to make practical tech skills accessible, and to build
          technology that helps businesses grow.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-brand-purple p-8 text-white">
            <h3 className="font-display text-2xl font-bold">Training</h3>
            <p className="mt-3 text-white/90">
              Cohort-based programs that take students from the basics to real
              projects.
            </p>
          </div>
          <div className="rounded-lg bg-brand-teal p-8 text-white">
            <h3 className="font-display text-2xl font-bold">Tech solutions</h3>
            <p className="mt-3 text-white/90">
              Websites, applications and security services for businesses of
              every size.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <h2 className="font-display text-3xl font-bold text-primary">
            What we stand for
          </h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="border-t-4 border-accent pt-4">
                <h3 className="font-bold">{v.title}</h3>
                <p className="mt-1 text-muted">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
