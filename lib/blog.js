import { posts } from "@/content/posts";

// All articles, newest first.
export function getPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}

// "12 Oct 2026". The date is read as UTC so it never shifts to a different day.
export function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

// Estimated reading time in minutes (about 200 words a minute).
export function readingMinutes(post) {
  const words = post.body.reduce((total, block) => {
    const text = block.items ? block.items.join(" ") : block.text || "";
    return total + text.split(/\s+/).filter(Boolean).length;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

// Colours for each category label and top bar.
export const categoryStyles = {
  Learning: { bar: "bg-brand-purple", tag: "text-primary" },
  Security: {
    bar: "bg-brand-teal",
    tag: "text-brand-teal dark:text-brand-teal-light",
  },
  Business: {
    bar: "bg-brand-gold",
    tag: "text-[#7a5b10] dark:text-brand-gold",
  },
};

export const fallbackCategoryStyle = {
  bar: "bg-brand-purple",
  tag: "text-primary",
};

// If an article has no "art" or "image", this illustration is used for its category.
export const fallbackArt = {
  Learning: "roadmap",
  Security: "password",
  Business: "storefront",
};
