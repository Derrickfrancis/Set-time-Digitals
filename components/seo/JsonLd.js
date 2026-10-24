import { jsonLd } from "@/lib/jsonld";

// Adds structured data that helps search engines understand the page.
// It is data, not a program: browsers never run it.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(data) }}
    />
  );
}
