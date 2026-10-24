import Link from "next/link";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/ui/ButtonLink";
import PostBody from "@/components/blog/PostBody";
import Picture from "@/components/ui/Picture";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { posts } from "@/content/posts";
import {
  getPosts,
  getPost,
  formatDate,
  readingMinutes,
  categoryStyles,
  fallbackCategoryStyle,
  fallbackArt,
} from "@/lib/blog";

// Build one page for every article at build time.
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const style = categoryStyles[post.category] || fallbackCategoryStyle;
  const more = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
        }}
      />
      <header className="border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
          <Link
            href="/blog"
            className="text-sm font-medium text-primary underline underline-offset-4 hover:no-underline"
          >
            ← All articles
          </Link>
          <p
            className={`mt-6 text-sm font-semibold uppercase tracking-wide ${style.tag}`}
          >
            {post.category}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            By {post.author} · {formatDate(post.date)} · {readingMinutes(post)}{" "}
            min read
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 pt-8">
        <Picture
          image={post.image}
          art={post.art || fallbackArt[post.category]}
          alt={post.imageAlt || post.title}
          sizes="(min-width: 768px) 768px, 100vw"
          aspect="aspect-[16/9] md:aspect-[16/8]"
        />
      </div>

      <article className="mx-auto max-w-3xl px-5 pb-6 pt-8">
        <p className="text-xl leading-8 text-muted">{post.excerpt}</p>
        <PostBody blocks={post.body} />
      </article>

      <section className="mx-auto max-w-3xl px-5 py-10">
        <div className="rounded-xl bg-brand-purple p-8 text-white">
          <h2 className="font-display text-2xl font-bold">
            Ready to start learning, or need a tech solution?
          </h2>
          <p className="mt-2 text-white/90">
            Explore our programs or tell us what your business needs.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href="/programs" variant="light">
              Explore programs
            </ButtonLink>
            <ButtonLink href="/contact" variant="lightOutline">
              Talk to us
            </ButtonLink>
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="mx-auto max-w-3xl px-5 pb-16">
          <h2 className="font-display text-2xl font-bold">More articles</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {more.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block py-4">
                  <span className="font-display text-lg font-bold group-hover:underline">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {formatDate(p.date)} · {readingMinutes(p)} min read
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
