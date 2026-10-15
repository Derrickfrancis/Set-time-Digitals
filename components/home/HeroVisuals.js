const lines = [
  [
    ["const", "kw"],
    [" student = ", ""],
    ['"you"', "str"],
    [";", ""],
  ],
  [
    ["student.learn(", ""],
    ['"a new skill"', "str"],
    [");", ""],
  ],
  [
    ["student.build(", ""],
    ['"real projects"', "str"],
    [");", ""],
  ],
  [["// you are ready to build", "cm"]],
];

const colours = {
  kw: "text-brand-lime",
  str: "text-brand-gold",
  cm: "text-white/55",
  "": "",
};

function schedule(allLines) {
  let time = 0.5;
  const timed = [];
  for (const pieces of allLines) {
    const length = pieces.reduce((total, [text]) => total + text.length, 0);
    const duration = Math.max(0.5, length * 0.04);
    timed.push({ pieces, length, delay: time, duration });
    time += duration + 0.2;
  }
  return { timed, cursorDelay: time - 0.2 };
}

const { timed, cursorDelay } = schedule(lines);

export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#150b19] shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ba6cc6]" />
          <span className="h-3 w-3 rounded-full bg-brand-gold" />
          <span className="h-3 w-3 rounded-full bg-brand-green" />
          <span className="ml-3 font-mono text-xs text-white/60">learn.js</span>
        </div>

        <div className="p-5 font-mono text-[13px] leading-7 text-white/90 sm:text-sm">
          {timed.map((line, i) => (
            <div key={i} className="min-h-7">
              <span
                className="type-line"
                style={{
                  "--n": line.length,
                  "--delay": `${line.delay}s`,
                  "--dur": `${line.duration}s`,
                }}
              >
                {line.pieces.map(([text, colour], j) => (
                  <span key={j} className={colours[colour]}>
                    {text}
                  </span>
                ))}
              </span>
              {i === timed.length - 1 && (
                <span
                  className="cursor"
                  style={{ "--cursor-delay": `${cursorDelay}s` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating badges */}
      <div
        className="float absolute -right-2 -top-5 hidden h-12 w-12 items-center justify-center rounded-lg bg-brand-gold font-mono text-sm font-bold text-[#1e1022] shadow-lg sm:flex sm:-right-4"
        style={{ "--float-dur": "5s" }}
      >
        {"</>"}
      </div>
      <div
        className="float absolute -bottom-8 -left-2 hidden h-12 w-12 items-center justify-center rounded-lg bg-brand-teal text-white shadow-lg sm:flex sm:-left-5"
        style={{ "--float-dur": "6.5s", "--float-delay": "-2s" }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
      <div
        className="float absolute -bottom-3 right-10 hidden h-11 w-11 items-center justify-center rounded-lg bg-brand-lime font-mono text-sm font-bold text-[#1e1022] shadow-lg sm:flex"
        style={{ "--float-dur": "7s", "--float-delay": "-4s" }}
      >
        {"{ }"}
      </div>
    </div>
  );
}
