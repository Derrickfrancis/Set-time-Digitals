import PageHeader from "@/components/ui/PageHeader";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata = {
  title: "Blog",
  description: "Articles, tips and news from the academy.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog">
        Articles, tips and news from the academy.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="max-w-xl text-lg text-muted">
          We have not published any articles yet. Check back soon, or have a
          look at our programs in the meantime.
        </p>
        <div className="mt-6">
          <ButtonLink href="/programs">Browse programs</ButtonLink>
        </div>
      </section>
    </>
  );
}
