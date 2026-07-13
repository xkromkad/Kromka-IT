'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import type { Screenshot } from '@/lib/data';

/**
 * Responsive screenshot grid with a lightweight lightbox overlay.
 * Click a thumbnail to open the full-size image; close with Esc, the ✕ button,
 * or by clicking the backdrop.
 */
export default function ProjectGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [active, close]);

  if (screenshots.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={shot.alt}
            className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-150 bg-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={screenshots[active].alt}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 text-3xl leading-none text-white/80 transition-colors hover:text-white"
          >
            ✕
          </button>
          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[active].src}
              alt={screenshots[active].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
