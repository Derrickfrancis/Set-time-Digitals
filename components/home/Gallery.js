import Reveal from "@/components/ui/Reveal";
import GalleryGrid from "./GalleryGrid";
import { gallery } from "@/content/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-primary">
            Life at the academy
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            A look at our classes, projects and events.
          </p>
        </Reveal>
        <GalleryGrid items={gallery} />
      </div>
    </section>
  );
}
