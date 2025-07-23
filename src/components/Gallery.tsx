'use client';

import Image from 'next/image';
import React, { useState } from 'react';

//const delay = (ms: number | undefined) => new Promise((res) => setTimeout(res, ms));

const images = [
  {
    src: 'https://picsum.photos/seed/rand1/800/600',
    title: 'Mountain View',
    description: 'A breathtaking view of mountains rising above the clouds at sunset.',
  },
  {
    src: 'https://picsum.photos/seed/rand2/800/600',
    title: 'City Lights',
    description: "Urban skyline illuminated at night, showcasing the city's vibrant energy.",
  },
  {
    src: 'https://picsum.photos/seed/rand3/800/600',
    title: 'Forest Path',
    description: 'A serene path through an ancient forest, dappled with soft sunlight.',
  },
  {
    src: 'https://picsum.photos/seed/rand4/800/600',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching to the horizon under a clear blue sky.',
  },
  {
    src: 'https://picsum.photos/seed/rand5/800/600',
    title: 'Ocean Breeze',
    description: 'Waves crashing on a pristine beach with palm trees swaying in the wind.',
  },
  {
    src: 'https://picsum.photos/seed/rand6/800/600',
    title: 'Snowy Peaks',
    description: 'Majestic mountains capped with pristine snow reflecting the morning light.',
  },
  {
    src: 'https://picsum.photos/seed/rand7/800/600',
    title: 'Urban Jungle',
    description: 'A modern cityscape with skyscrapers reaching toward the clouds.',
  },
  {
    src: 'https://picsum.photos/seed/rand8/800/600',
    title: 'Sunset Glow',
    description: 'A stunning sunset painting the sky with vibrant shades of orange and purple.',
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (idx: number) => {
    setSelectedIndex(selectedIndex === idx ? null : idx);
  };
  return (
    <>
      <section className="z-50 mx-auto my-16 max-w-4xl px-4 md:px-0">
        <h2 className="border-retro-magenta dark:border-dark-magenta mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Featured Projects</h2>

        <div className="flex justify-center -space-x-9 overflow-auto rounded-lg">
          {images.map((img, idx) => (
            <React.Fragment key={idx}>
              <div className="group parallelogram relative bg-red-600">
                <Image
                  src={img.src}
                  alt={img.title}
                  width={800}
                  height={600}
                  className="h-48 w-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onClick={() => handleImageClick(idx)}
                />
              </div>
              <div className={`group parallelogram-desc relative w-[600px] ${selectedIndex === idx ? 'block' : 'hidden'} bg-dark-bg`}>
                <h3 className="pt-4 pr-12 text-right text-base font-semibold">{img.title}</h3>
                <p className="mt-2 px-12 text-right text-sm">{img.description}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
