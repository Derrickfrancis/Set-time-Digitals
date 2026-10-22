"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { CloseIcon, ImageIcon } from "@/components/ui/Icons";

// Tiles without a photo yet get one of these brand-colour backgrounds.
const placeholderColours = [
  "from-brand-purple to-brand-teal",
  "from-brand-teal to-brand-purple",
  "from-brand-purple to-[#3a1240]",
  "from-brand-teal to-[#0f3a33]",
  "from-[#3a1240] to-brand-teal",
];

export default function GalleryGrid({ items }) {
  const dialogRef = useRef(null);
  const [active, setActive] = useState(null);

  function openPhoto(item) {
    setActive(item);
    dialogRef.current?.showModal();
  }

  function closePhoto() {
    dialogRef.current?.close();
  }

  return (
    <>
      <ul className="mt-10 grid auto-rows-[11rem] grid-cols-2 gap-4 sm:auto-rows-[13rem] md:grid-cols-4">
        {items.map((item, i) => {
          const size = i === 0 ? "col-span-2 row-span-2" : "";
          const sizes =
            i === 0
              ? "(min-width: 768px) 50vw, 100vw"
              : "(min-width: 768px) 25vw, 50vw";

          return (
            <Reveal as="li" key={item.caption} delay={i * 90} className={size}>
              {item.src ? (
                <button
                  type="button"
                  onClick={() => openPhoto(item)}
                  aria-label={`View larger: ${item.caption}`}
                  className="group relative block h-full w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={sizes}
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-10 text-left text-sm font-semibold text-white">
                    {item.caption}
                  </span>
                </button>
              ) : (
                <figure
                  className={`relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-br p-4 text-center text-white ${placeholderColours[i % placeholderColours.length]}`}
                >
                  <ImageIcon className="h-8 w-8 opacity-80" />
                  <figcaption>
                    <span className="block font-semibold">{item.caption}</span>
                    <span className="block text-sm text-white/80">
                      Photo coming soon
                    </span>
                  </figcaption>
                </figure>
              )}
            </Reveal>
          );
        })}
      </ul>

      {/* Full-size viewer. Escape, the close button, or a click outside the photo closes it. */}
      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closePhoto();
        }}
        aria-label={active ? active.caption : "Photo viewer"}
        className="m-auto w-[92vw] max-w-5xl border-0 bg-transparent p-0 text-white backdrop:bg-black/85"
      >
        {active && (
          <figure className="relative">
            <div className="relative h-[70vh] w-full">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="92vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-lg font-semibold">
              {active.caption}
            </figcaption>
          </figure>
        )}
        <button
          type="button"
          onClick={closePhoto}
          aria-label="Close photo"
          className="fixed right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white ring-1 ring-white/30 hover:bg-black"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </dialog>
    </>
  );
}
