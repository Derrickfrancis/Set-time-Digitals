import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch about our programs or request a quote for your business.",
};

// One clickable row: a round icon, a small label and the contact detail.
function ContactRow({ href, icon, label, value, badge, external = false }) {
  const extra = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a href={href} {...extra} className="group flex items-center gap-4">
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-transform motion-safe:group-hover:scale-105 ${badge}`}
      >
        {icon}
      </span>
      <span>
        <span className="block text-sm text-muted">{label}</span>
        <span className="text-lg font-medium text-fg underline-offset-4 group-hover:underline">
          {value}
        </span>
      </span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact us">
        Ask about a program, or tell us what your business needs.
      </PageHeader>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-[1fr_1.4fr] md:py-16">
        <div>
          <h2 className="font-display text-2xl font-bold">Reach us directly</h2>
          <ul className="mt-6 space-y-5">
            <li>
              <ContactRow
                href={`mailto:${site.email}`}
                icon={<MailIcon className="h-6 w-6" />}
                label="Email"
                value={site.email}
                badge="bg-brand-purple"
              />
            </li>
            <li>
              <ContactRow
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                icon={<PhoneIcon className="h-6 w-6" />}
                label="Phone"
                value={site.phone}
                badge="bg-brand-purple"
              />
            </li>
            <li>
              <ContactRow
                href={`${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
                icon={<WhatsAppIcon className="h-6 w-6" />}
                label="WhatsApp"
                value="Chat with us on WhatsApp"
                badge="bg-[#128C7E]"
                external
              />
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold">Send us a message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
