import Image from "next/image";
import { site } from "@/lib/site";

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
        className={`${className} block dark:mkdir -p app/programs app/tech-solutions app/about app/blog app/contacthidden`}
      />
      <Image
        src="/logo-dark.png"
        alt=""
        aria-hidden="true"
        width={1136}
        height={621}
        priority
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
