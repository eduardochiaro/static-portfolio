import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string | React.ReactNode; // Allow string or React node for button text
  buttonUrl: string;
  isDownload?: boolean; // Optional prop to indicate if the button is for downloading
};

const ProjectCard = ({ title, description, imageUrl, buttonText, buttonUrl, isDownload }: Props) => {
  return (
    <div className="flex h-full flex-col md:flex-row">
      <div className="border-retro-text dark:border-dark-text bg-retro-text dark:bg-dark-text group relative w-full overflow-hidden rounded-lg border-4 shadow transition-transform duration-500 ease-in-out md:w-2/5">
        <Image
          src={imageUrl}
          alt={title}
          sizes="(max-width: 768px) 100vw, 33vw"
          fill={true}
          className="w-full rounded object-cover transition-transform duration-500 ease-in-out group-hover:scale-125 md:h-full"
        />
      </div>
      <div className="flex w-full flex-col px-6 md:w-3/5">
        <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-400">{title}</h3>
        <p className="mb-6 min-h-24 flex-grow text-gray-600">{description}</p>
        <a
          href={buttonUrl}
          className="button flex items-center gap-2"
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
