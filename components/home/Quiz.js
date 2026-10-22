import Reveal from "@/components/ui/Reveal";
import QuizCard from "./QuizCard";
import { quiz, QUESTIONS_PER_ROUND } from "@/content/quiz";

export default function Quiz() {
  return (
    <section id="quiz" className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.4fr] md:items-start md:py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-primary">
            Test your tech knowledge
          </h2>
          <p className="mt-3 max-w-md text-muted">
            {QUESTIONS_PER_ROUND} quick questions with instant feedback, drawn
            from a bank of {quiz.length}. Try again for a fresh set.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <QuizCard />
        </Reveal>
      </div>
    </section>
  );
}
