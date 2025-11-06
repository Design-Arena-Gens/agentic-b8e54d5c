"use client";
import { useEffect, useState } from 'react';

export function GalleryLightbox({
  images,
  startIndex,
  onClose,
}: {
  images: { src: string; alt: string }[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <button
        className="absolute right-4 top-4 rounded-md bg-white/10 px-3 py-1.5 text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        onClick={onClose}
      >
        Close
      </button>
      <button
        aria-label="Previous image"
        className="absolute left-4 rounded-md bg-white/10 px-3 py-1.5 text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
      >
        ?
      </button>
      <img
        src={images[index].src}
        alt={images[index].alt}
        className="max-h-[85vh] max-w-[90vw] rounded-md shadow-subtle"
      />
      <button
        aria-label="Next image"
        className="absolute right-4 rounded-md bg-white/10 px-3 py-1.5 text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        onClick={() => setIndex((i) => (i + 1) % images.length)}
      >
        ?
      </button>
    </div>
  );
}
