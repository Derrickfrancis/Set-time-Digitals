import Reveal from "@/components/ui/Reveal";

const steps = [
  { title: "Choose a program", text: "Pick the skill you want to learn." },
  { title: "Join a cohort", text: "Apply and pay to secure your place." },
  {
    title: "Learn and practise",
    text: "Attend classes and finish the lessons.",
  },
  { title: "Build a project", text: "Put your skills to work on real tasks." },
  {
    title: "Get certified",
    text: "Receive a certificate employers can verify.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-primary">
          How learning works
        </h2>
      </Reveal>
      <ol className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-6">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 120}>
            <div className="bar h-1 bg-accent" />
            <p className="mt-4 font-display text-3xl font-bold text-primary">
              {i + 1}
            </p>
            <h3 className="mt-2 font-bold">{s.title}</h3>
            <p className="mt-1 text-muted">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
