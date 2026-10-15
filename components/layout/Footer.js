import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

// The footer is dark in both light and dark mode, so it uses fixed colours.
export default function Footer() {
  const link = "text-white/85 hover:text-white hover:underline";

  return (
    <footer className="bg-[#0a0410] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo onDark className="h-20 w-auto" />
          <p className="mt-4 max-w-sm text-white/70">{site.description}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-bold text-brand-gold">
            Explore
          </h2>
          <ul className="mt-3 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-bold text-brand-gold">
            Contact
          </h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={`mailto:${site.email}`} className={link}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={link}>
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                rel="noopener noreferrer"
                className={link}
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-white/60">
          © {site.year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
