// Turns an article's list of pieces into the page. Everything is drawn as plain text by React,
// so nothing typed into the content file can run as code.
export default function PostBody({ blocks }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-10 font-display text-2xl font-bold text-primary"
              >
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mt-4 list-disc space-y-2 pl-6 text-lg leading-8 marker:text-accent"
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="mt-4 list-decimal space-y-2 pl-6 text-lg leading-8 marker:font-bold marker:text-primary"
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <p
                key={i}
                className="mt-6 rounded-lg border-l-4 border-accent bg-surface p-5 text-lg leading-8"
              >
                {block.text}
              </p>
            );
          default:
            return (
              <p key={i} className="mt-4 text-lg leading-8">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
