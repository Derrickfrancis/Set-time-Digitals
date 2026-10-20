import Image from "next/image";
import { site } from "@/lib/site";

// Shows the light logo in light mode and the dark logo in dark mode.
// The switching is done by the .logo-light and .logo-dark rules in globals.css.
// Pass onDark to always show the dark-mode logo (for dark backgrounds such as the footer).
export default function Logo({ className = "h-14 w-auto", onDark = false }) {
  if (onDark) {
    return (
      <Image
        src="/logo-dark.png"
        alt={site.name}
        width={1136}
        height={621}
        className={`${className} block`}
      />
    );
  }

  return (
    <>
      <Image
        src="/logo-light.png"
        alt={site.name}
        width={1136}
        height={621}
        priority
        className={`${className} logo-light`}
      />
      <Image
        src="/logo-dark.png"
        alt=""
        aria-hidden="true"
        width={1136}
        height={621}
        priority
        className={`${className} logo-dark`}
      />
    </>
  );
}
