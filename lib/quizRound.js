function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pickQuestionNumbers(bankSize, count, seen, lastRound = []) {
  const all = Array.from({ length: bankSize }, (_, i) => i);
  let pool = all.filter((n) => !seen.has(n));

  if (pool.length < count) {
    seen.clear();
    const justPlayed = new Set(lastRound);
    pool = all.filter((n) => !justPlayed.has(n));
    if (pool.length < count) pool = all;
  }

  const picked = shuffle(pool).slice(0, count);
  picked.forEach((n) => seen.add(n));
  return picked;
}

export function withShuffledOptions(question) {
  const order = shuffle(question.options.map((_, i) => i));
  return {
    ...question,
    options: order.map((i) => question.options[i]),
    answer: order.indexOf(question.answer),
  };
}
