"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) =>
    `rounded px-3 py-2 text-base font-medium hover:bg-surface ${
      pathname.startsWith(href)
        ? "text-primary underline decoration-accent decoration-2 underline-offset-8"
        : "text-fg"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
        >
          <Logo className="h-[4.5rem] w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <ButtonLink href="/programs" size="sm">
              Start learning
            </ButtonLink>
          </div>
          <button
            type="button"
            className="rounded-md px-3 py-2 text-base font-medium text-fg hover:bg-surface md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-bg px-5 pb-6 pt-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block ${linkClass(item.href)}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/programs" className="mt-4 w-full">
            Start learning
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
