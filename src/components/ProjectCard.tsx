import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonUrl: string;
  isDownload?: boolean; // Optional prop to indicate if the button is for downloading
};

const ProjectCard = ({ title, description, imageUrl, buttonText, buttonUrl, isDownload }: Props) => {
  return (
    <div className="flex h-full flex-col md:flex-row">
      <div className="border-retro-text dark:border-dark-text group relative w-full overflow-hidden rounded-lg border-2 shadow transition-transform duration-500 ease-in-out md:w-2/5">
        <Image
          src={imageUrl}
          alt={title}
          sizes="(max-width: 768px) 100vw, 33vw"
          fill={true}
          className="h-48 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 md:h-full"
        />
      </div>
      <div className="flex w-full flex-col px-6 md:w-3/5">
        <h3 className="mb-3 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mb-6 min-h-32 flex-grow text-gray-600">{description}</p>
        <a
          href={buttonUrl}
          className="bg-retro-text dark:bg-dark-text text-retro-bg dark:text-dark-bg hover:bg-retro-magenta dark:hover:bg-dark-magenta mt-2 inline-flex items-center gap-2 px-4 py-2 transition-colors"
          download={isDownload}
          target={!isDownload ? '_blank' : undefined}
          rel={!isDownload ? 'noopener noreferrer' : undefined}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
