'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  {
    src: 'https://picsum.photos/seed/rand1/400/600',
    title: 'Mountain View',
  },
  {
    src: 'https://picsum.photos/seed/rand2/400/600',
    title: 'City Lights',
  },
  {
    src: 'https://picsum.photos/seed/rand3/400/600',
    title: 'Forest Path',
  },
  {
    src: 'https://picsum.photos/seed/rand4/400/600',
    title: 'Desert Dunes',
  },
  {
    src: 'https://picsum.photos/seed/rand5/400/600',
    title: 'Ocean Breeze',
  },
  {
    src: 'https://picsum.photos/seed/rand6/400/600',
    title: 'Snowy Peaks',
  },
  {
    src: 'https://picsum.photos/seed/rand7/400/600',
    title: 'Urban Jungle',
  },
  {
    src: 'https://picsum.photos/seed/rand8/400/600',
    title: 'Sunset Glow',
  },
];

export default function Gallery() {
  const [, setOverlayVisible] = useState('');
  return (
    <>
      <section className="z-50 mx-auto my-16 max-w-4xl px-4 md:px-0">
        <h2 className="border-retro-magenta dark:border-dark-magenta mb-6 -ml-6 border-l-4 pl-4 text-xl font-bold uppercase">Featured Projects</h2>

        <div className="flex justify-center space-x-6 pt-10 pb-4">
          {images.map((img, idx) => (
            <div key={idx} className="group relative" onMouseEnter={() => setOverlayVisible(img.src)} onMouseLeave={() => setOverlayVisible('')}>
              {/* Title appears above on hover */}
              <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.title}
              </div>
              <div className="h-80 w-10 transform rounded bg-cover bg-center shadow transition-transform duration-300 group-hover:-translate-y-8">
                <Image
                  src={img.src}
                  alt={`Gallery image ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="border-retro-text dark:border-dark-text rounded-lg border-1"
                />
              </div>
              <div className="border-retro-text dark:border-dark-text absolute bottom-0 left-2 size-6 rounded-full border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
