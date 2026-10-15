import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";

export default function CallToAction() {
  return (
    <section className="bg-brand-purple text-white">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold">
            Ready to get started?
          </h2>
          <p className="mt-2 max-w-xl text-white/90">
            Pick a program, or tell us what your business needs.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/programs" variant="light">
            Browse programs
          </ButtonLink>
          <ButtonLink href="/contact" variant="lightOutline">
            Talk to us
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
