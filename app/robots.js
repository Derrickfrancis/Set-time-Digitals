import { site } from "@/lib/site";

// Tells search engines what they may visit, served at /robots.txt.
export default function robots() {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
