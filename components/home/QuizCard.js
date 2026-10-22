"use client";

import { useEffect, useRef, useState } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import { quiz, QUESTIONS_PER_ROUND } from "@/content/quiz";
import { pickQuestionNumbers, withShuffledOptions } from "@/lib/quizRound";

const firstNumbers = quiz.slice(0, QUESTIONS_PER_ROUND).map((_, i) => i);
const firstRound = firstNumbers.map((n) => quiz[n]);

function resultMessage(score, total) {
  if (score === total)
    return "Perfect score! You already think like a technologist.";
  if (score >= total - 2)
    return "Nice work! You have a solid base to build on.";
  return "A good start. Everyone begins somewhere, and our programs begin at the basics.";
}

const buttonBase =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition duration-200 motion-safe:hover:-translate-y-0.5";

export default function QuizCard() {
  const [round, setRound] = useState(firstRound); // the questions for this attempt
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null); // the option chosen for this question
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const seen = useRef(new Set(firstNumbers)); // questions this visitor has already been asked
  const lastNumbers = useRef(firstNumbers); // the previous round
  const headingRef = useRef(null);
  const moved = useRef(false); // becomes true after the visitor clicks Next or Try again

  useEffect(() => {
    if (moved.current) headingRef.current?.focus();
  }, [index, finished, round]);

  const total = round.length;
  const question = round[index];
  const answered = picked !== null;

  function choose(optionIndex) {
    if (answered) return;
    setPicked(optionIndex);
    if (optionIndex === question.answer) setScore((s) => s + 1);
  }

  function next() {
    moved.current = true;
    if (index + 1 === total) {
      setFinished(true);
    } else {
      setIndex(index + 1);
      setPicked(null);
    }
  }

  // "Try again" draws a brand new set of questions, with the answers in a new order.
  function restart() {
    moved.current = true;
    const numbers = pickQuestionNumbers(
      quiz.length,
      QUESTIONS_PER_ROUND,
      seen.current,
      lastNumbers.current,
    );
    lastNumbers.current = numbers;
    setRound(numbers.map((n) => withShuffledOptions(quiz[n])));
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  }

  function optionStyle(optionIndex) {
    if (!answered) return "border-fg/30 hover:bg-surface";
    if (optionIndex === question.answer) return "border-green bg-green/10";
    if (optionIndex === picked)
      return "border-red-700 bg-red-700/10 dark:border-red-300 dark:bg-red-300/10";
    return "border-line text-muted";
  }

  if (finished) {
    return (
      <div className="rounded-xl border border-line bg-bg p-6 md:p-8">
        <h3
          ref={headingRef}
          tabIndex={-1}
          className="font-display text-3xl font-bold text-primary outline-none"
        >
          You scored {score} out of {total}
        </h3>
        <p className="mt-3 text-lg text-muted">{resultMessage(score, total)}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/programs">Explore programs</ButtonLink>
          <button
            type="button"
            onClick={restart}
            className={`${buttonBase} border border-fg/30 text-fg hover:bg-surface`}
          >
            Try again
          </button>
        </div>
        <p className="mt-4 text-sm text-muted">
          Each try gives you a fresh set of questions from our bank of{" "}
          {quiz.length}.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-line bg-bg p-6 md:p-8">
      <div className="flex items-center justify-between text-sm text-muted">
        <span>
          Question {index + 1} of {total}
        </span>
        <span>Score: {score}</span>
      </div>
      <div
        aria-hidden="true"
        className="mt-2 h-2 overflow-hidden rounded-full bg-surface"
      >
        <div
          className="h-full rounded-full bg-accent transition-all duration-500"
          style={{ width: `${((index + (answered ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <h3
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 font-display text-2xl font-bold outline-none"
      >
        {question.question}
      </h3>

      <ul className="mt-5 space-y-3">
        {question.options.map((option, i) => (
          <li key={option}>
            <button
              type="button"
              onClick={() => choose(i)}
              aria-disabled={answered}
              className={`flex w-full items-center justify-between gap-3 rounded-md border px-4 py-3 text-left text-base transition-colors ${optionStyle(i)}`}
            >
              <span>{option}</span>
              {answered && i === question.answer && (
                <span className="shrink-0 text-sm font-semibold text-green">
                  ✓ Correct
                </span>
              )}
              {answered && i === picked && i !== question.answer && (
                <span className="shrink-0 text-sm font-semibold text-red-700 dark:text-red-300">
                  ✗ Your answer
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      <div role="status" className="mt-5">
        {answered && (
          <p>
            <strong>
              {picked === question.answer ? "Correct! " : "Not quite. "}
            </strong>
            {question.explanation}
          </p>
        )}
      </div>

      {answered && (
        <button
          type="button"
          onClick={next}
          className={`${buttonBase} mt-5 bg-primary text-primary-fg hover:opacity-90`}
        >
          {index + 1 === total ? "See my score" : "Next question"}
        </button>
      )}
    </div>
  );
}
