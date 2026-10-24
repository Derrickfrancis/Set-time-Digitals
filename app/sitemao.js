import { site } from "@/lib/site";
import { posts } from "@/content/posts";

// The list of pages search engines should know about, served at /sitemap.xml.
export default function sitemap() {
  const base = site.url.replace(/\/$/, "");

  const pages = [
    { path: "", priority: 1 },
    { path: "/programs", priority: 0.9 },
    { path: "/tech-solutions", priority: 0.9 },
    { path: "/about", priority: 0.6 },
    { path: "/blog", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  return [
    ...pages.map((page) => ({
      url: `${base}${page.path}`,
      changeFrequency: "monthly",
      priority: page.priority,
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
