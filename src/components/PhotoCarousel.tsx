import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PHOTOS } from "@/data/site";

export function PhotoCarousel() {
  const [i, setI] = useState(0);
  const photo = PHOTOS[i];
  if (!photo) return null;

  const prev = () => setI((n) => (n === 0 ? PHOTOS.length - 1 : n - 1));
  const next = () => setI((n) => (n === PHOTOS.length - 1 ? 0 : n + 1));

  return (
    <figure className="relative overflow-hidden rounded-lg bg-navy-deep">
      <img
        src={photo.src}
        alt={photo.alt}
        className="aspect-[3/2] w-full object-cover"
        width={1600}
        height={1067}
      />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-navy/80 px-3 py-2 text-paper text-sm">
        <span>{photo.caption}</span>
        <span className="tabular-nums text-paper/70">
          {i + 1} / {PHOTOS.length}
        </span>
      </figcaption>
      <button
        type="button"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 size-11 rounded-full bg-paper/90 text-navy inline-flex items-center justify-center"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 size-11 rounded-full bg-paper/90 text-navy inline-flex items-center justify-center"
        aria-label="Next photograph"
      >
        <ChevronRight className="size-5" />
      </button>
    </figure>
  );
}
