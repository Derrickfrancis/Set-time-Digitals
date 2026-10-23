import Image from "next/image";
import Art from "./Art";

// Only photos stored on this site are accepted (a path starting with a single "/").
const isLocalImage = (src) =>
  typeof src === "string" && /^\/(?!\/)[^\s"'<>]+$/.test(src);

// Shows a real photo when "image" is set, otherwise one of our illustrations ("art").
//   image: a photo in the public folder, for example "/programs/front-end.jpg"
//   alt:   describes the photo (only used for real photos)
//   art:   the name of an illustration, for example "frontend"
export default function Picture({
  image,
  art,
  alt = "",
  sizes,
  aspect = "aspect-[4/3]",
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${aspect} ${className}`}
    >
      {isLocalImage(image) ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <Art name={art} />
      )}
    </div>
  );
}
