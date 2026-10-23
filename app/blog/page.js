import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Picture from "@/components/ui/Picture";
import Reveal from "@/components/ui/Reveal";
import {
  getPosts,
  formatDate,
  readingMinutes,
  categoryStyles,
  fallbackCategoryStyle,
  fallbackArt,
} from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Articles, tips and news from the academy.",
};

export default function BlogPage() {
  const list = getPosts();

  return (
    <>
      <PageHeader title="Blog">
        Articles, tips and news from the academy.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <ul className="space-y-8">
          {list.map((post, i) => {
            const style =
              categoryStyles[post.category] || fallbackCategoryStyle;
            return (
              <Reveal as="li" key={post.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid overflow-hidden rounded-xl border border-line bg-bg transition-transform duration-300 md:grid-cols-[20rem_1fr] motion-safe:hover:-translate-y-0.5"
                >
                  <Picture
                    image={post.image}
                    art={post.art || fallbackArt[post.category]}
                    alt={post.imageAlt || post.title}
                    sizes="(min-width: 768px) 320px, 100vw"
                    className="rounded-none md:aspect-auto md:min-h-56"
                  />
                  <span className="flex flex-col justify-center p-6 md:p-8">
                    <span className="flex flex-wrap items-center gap-3">
                      <span
                        className={`text-sm font-semibold uppercase tracking-wide ${style.tag}`}
                      >
                        {post.category}
                      </span>
                      {i === 0 && (
                        <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-fg">
                          Latest
                        </span>
                      )}
                    </span>
                    <span className="mt-2 font-display text-2xl font-bold group-hover:underline">
                      {post.title}
                    </span>
                    <span className="mt-3 text-lg text-muted">
                      {post.excerpt}
                    </span>
                    <span className="mt-4 text-sm text-muted">
                      {formatDate(post.date)} · {readingMinutes(post)} min read
                    </span>
                    <span className="mt-3 font-semibold text-primary">
                      Read the article →
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </section>
    </>
  );
}
