"use client";

import { useLayoutEffect } from "react";

export default function ThemeToggle() {
  // Re-applies the saved theme after React's dev-mode remount. No-op in production.
  useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) document.documentElement.setAttribute("data-theme", saved);
    } catch {}
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const icon = "h-5 w-5 fill-none stroke-current";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md text-fg hover:bg-surface"
    >
      {/* Sun: shown in dark mode */}
      <svg
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        className={`${icon} hidden dark:block`}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      {/* Moon: shown in light mode */}
      <svg
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${icon} block dark:hidden`}
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
