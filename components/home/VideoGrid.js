"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { CloseIcon } from "@/components/ui/Icons";

function PlayIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`${className} fill-current`}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

// Safety checks. We only play video files that live on this site (a path starting with a single "/"
// and ending in .mp4 or .webm) and YouTube ids that are exactly 11 letters, numbers, - or _.
// Anything else is ignored, so a typo in the content file cannot load something unexpected.
const isLocalFile = (file) =>
  typeof file === "string" && /^\/(?!\/)[^\s"'<>]+\.(mp4|webm)$/i.test(file);
const isYouTubeId = (id) => typeof id === "string" && /^[\w-]{11}$/.test(id);
const isLocalImage = (src) =>
  typeof src === "string" && /^\/(?!\/)[^\s"'<>]+$/.test(src);
const isPlayable = (video) =>
  isLocalFile(video.file) || isYouTubeId(video.youtube);

export default function VideoGrid({ items }) {
  const dialogRef = useRef(null);
  const [active, setActive] = useState(null);

  function openVideo(video) {
    setActive(video);
    dialogRef.current?.showModal();
  }

  function closeVideo() {
    dialogRef.current?.close();
  }

  return (
    <>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((video, i) => (
          <Reveal as="li" key={video.title} delay={i * 90}>
            {isPlayable(video) ? (
              <button
                type="button"
                onClick={() => openVideo(video)}
                aria-label={`Play video: ${video.title}`}
                className="group relative block aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-brand-purple to-brand-teal"
              >
                {isLocalImage(video.poster) && (
                  <Image
                    src={video.poster}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                )}
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-purple shadow-lg transition-transform motion-safe:group-hover:scale-110">
                  <PlayIcon className="ml-0.5 h-7 w-7" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4 text-left text-sm font-semibold text-white">
                  {video.title}
                </span>
              </button>
            ) : (
              <figure className="relative flex aspect-video w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-br from-brand-teal to-brand-purple p-4 text-center text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <PlayIcon className="ml-0.5 h-6 w-6" />
                </span>
                <figcaption>
                  <span className="block font-semibold">{video.title}</span>
                  <span className="block text-sm text-white/80">
                    Video coming soon
                  </span>
                </figcaption>
              </figure>
            )}
          </Reveal>
        ))}
      </ul>

      {/* Full-size player. Escape, the close button, or a click outside closes it and stops the video. */}
      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeVideo();
        }}
        aria-label={active ? active.title : "Video player"}
        className="m-auto w-[92vw] max-w-4xl border-0 bg-transparent p-0 text-white backdrop:bg-black/85"
      >
        {active && (
          <div>
            {isLocalFile(active.file) ? (
              <video
                key={active.file}
                src={active.file}
                poster={isLocalImage(active.poster) ? active.poster : undefined}
                controls
                autoPlay
                playsInline
                aria-label={active.title}
                className="max-h-[75vh] w-full rounded-lg bg-black"
              />
            ) : (
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${active.youtube}?autoplay=1&rel=0`}
                  title={active.title}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            )}
            <p className="mt-3 text-center text-lg font-semibold">
              {active.title}
            </p>
          </div>
        )}
        <button
          type="button"
          onClick={closeVideo}
          aria-label="Close video"
          className="fixed right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white ring-1 ring-white/30 hover:bg-black"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </dialog>
    </>
  );
}
