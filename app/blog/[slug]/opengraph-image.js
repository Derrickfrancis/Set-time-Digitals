import { ImageResponse } from "next/og";
import { posts } from "@/content/posts";
import { getPost } from "@/lib/blog";
import { site } from "@/lib/site";

// The picture shown when an article is shared: the article's title on a brand-coloured background.
export const alt = "Article from Set-Time Digital Hub Academy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post ? post.title : site.name;
  const category = post ? post.category.toUpperCase() : "";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 70,
        color: "white",
        background:
          "linear-gradient(135deg, #681D70 0%, #4a2a63 45%, #1D5D53 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 30,
          letterSpacing: 4,
          color: "#D3AC4D",
          fontWeight: 700,
        }}
      >
        {category}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 70,
          fontWeight: 700,
          lineHeight: 1.12,
          maxWidth: 1000,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", alignItems: "center", fontSize: 32 }}>
        <div
          style={{
            width: 70,
            height: 6,
            background: "#D3AC4D",
            borderRadius: 3,
            marginRight: 22,
          }}
        />
        {site.name}
      </div>
    </div>,
    { ...size },
  );
}
