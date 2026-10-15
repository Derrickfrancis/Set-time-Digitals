// The title block at the top of every inner page.
export default function PageHeader({ title, children }) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h1 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
          {title}
        </h1>
        {children && (
          <p className="mt-4 max-w-2xl text-lg text-muted">{children}</p>
        )}
      </div>
    </header>
  );
}
