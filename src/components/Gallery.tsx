'use client';

import Image from 'next/image';
import React from 'react';

//const delay = (ms: number | undefined) => new Promise((res) => setTimeout(res, ms));

const images = [
  {
    src: 'https://picsum.photos/seed/rand1/800/600',
    title: 'Mountain View',
  },
  {
    src: 'https://picsum.photos/seed/rand2/800/600',
    title: 'City Lights',
  },
  {
    src: 'https://picsum.photos/seed/rand3/800/600',
    title: 'Forest Path',
  },
  {
    src: 'https://picsum.photos/seed/rand4/800/600',
    title: 'Desert Dunes',
  },
  {
    src: 'https://picsum.photos/seed/rand5/800/600',
    title: 'Ocean Breeze',
  },
  {
    src: 'https://picsum.photos/seed/rand6/800/600',
    title: 'Snowy Peaks',
  },
  {
    src: 'https://picsum.photos/seed/rand7/800/600',
    title: 'Urban Jungle',
  },
  {
    src: 'https://picsum.photos/seed/rand8/800/600',
    title: 'Sunset Glow',
  },
];

const expandImage = async (src: string, event: React.MouseEvent<HTMLDivElement>) => {
  // Get the bounding rectangle of the clicked element
  const target = event.currentTarget.getBoundingClientRect();

  // Create the overlay container
  const expandedImage = document.createElement('div');
  expandedImage.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/75';
  expandedImage.style.cursor = 'pointer';
  expandedImage.onclick = () => {
    document.body.removeChild(expandedImage);
  };

  const divContainer = document.createElement('div');
  divContainer.className = 'rounded-lg shadow-lg bg-red-500 bg-cover bg-center';
  divContainer.style.position = 'absolute';
  divContainer.style.transition = 'all 0.7s ease-out';
  divContainer.style.objectFit = 'contain';
  divContainer.style.width = `${target.width}px`;
  divContainer.style.height = `${target.height}px`;
  divContainer.style.top = `${target.top}px`;
  divContainer.style.left = `${target.left}px`;
  divContainer.style.transform = 'none'; // No scaling initially
  divContainer.style.backgroundImage = `url(${src})`;

  // Append the image to the overlay
  expandedImage.appendChild(divContainer);
  document.body.appendChild(expandedImage);

  //get rel image size
  const img = new window.Image();
  img.src = src;
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  const aspectRatio = img.width / img.height;
  const isLandscape = aspectRatio > 1;

  /*
  // Wait for the next frame to apply the full-size transformation
  requestAnimationFrame(() => {
    divContainer.style.width = '500px'; // Reset width to auto for full size
    divContainer.style.height = '500px'; // Set height to fit the screen
    divContainer.style.top = '50%';
    divContainer.style.left = '50%';
    divContainer.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  await delay(3000);
  */
  requestAnimationFrame(() => {
    // get hight from aspect ratio with size 800px
    if (isLandscape) {
      divContainer.style.width = '800px'; // Set width to fit the screen
      divContainer.style.height = `${800 / aspectRatio}px`; // Set height based on aspect ratio
    } else {
      divContainer.style.height = '800px'; // Set height to fit the screen
      divContainer.style.width = `${800 * aspectRatio}px`; // Set width based on aspect rati
    }
    divContainer.style.top = '50%';
    divContainer.style.left = '50%';
    divContainer.style.transform = 'translate(-50%, -50%) scale(1)';
  });
};

export default function Gallery() {
  return (
    <>
      <section className="z-50 mx-auto my-16 max-w-4xl px-4 md:px-0">
        <h2 className="border-retro-magenta dark:border-dark-magenta mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Featured Projects</h2>

        <div className="flex justify-center space-x-6 pt-10 pb-4">
          {images.map((img, idx) => (
            <div key={idx} className="group relative">
              {/* Title appears above on hover */}
              <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.title}
              </div>
              <div
                className="relative h-96 w-10 transform rounded bg-cover bg-center shadow transition-transform duration-300 group-hover:-translate-y-8"
                onClick={(event) => expandImage(img.src, event)}
              >
                <Image
                  src={img.src}
                  alt={`Gallery image ${idx + 1}`}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-80 w-full rounded-lg object-cover object-center"
                />
              </div>
              <div className="border-retro-text dark:border-dark-text absolute bottom-0 left-2 size-6 rounded-full border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
