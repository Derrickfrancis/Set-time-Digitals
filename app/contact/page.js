import PageHeader from "@/components/ui/PageHeader";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch about our programs or request a quote for your business.",
};

export default function ContactPage() {
  const link = "text-primary underline underline-offset-4 hover:no-underline";

  return (
    <>
      <PageHeader title="Contact us">
        Ask about a program, or tell us what your business needs.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <h2 className="font-display text-2xl font-bold">Reach us directly</h2>
        <ul className="mt-6 space-y-4 text-lg">
          <li>
            <span className="block text-sm text-muted">Email</span>
            <a href={`mailto:${site.email}`} className={link}>
              {site.email}
            </a>
          </li>
          <li>
            <span className="block text-sm text-muted">Phone</span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={link}>
              {site.phone}
            </a>
          </li>
          <li>
            <span className="block text-sm text-muted">WhatsApp</span>
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              Chat with us on WhatsApp
            </a>
          </li>
        </ul>
        <p className="mt-10 max-w-xl text-muted">
          A contact form is coming soon. Until then, email, call or message us
          on WhatsApp.
        </p>
      </section>
    </>
  );
}
