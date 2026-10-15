import Link from "next/link";

const variants = {
  primary: "bg-primary text-primary-fg hover:opacity-90",
  outline: "border border-fg/30 text-fg hover:bg-surface",
  light: "bg-white text-brand-purple hover:bg-white/90",
  lightOutline: "border border-white/70 text-white hover:bg-white/10",
};

const sizes = {
  md: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
};

export default function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md font-semibold transition duration-200 motion-safe:hover:-translate-y-0.5 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
