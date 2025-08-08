import Image from 'next/image';
import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string | React.ReactNode; // Allow string or React node for button text
  buttonUrl: string;
  isDownload?: boolean; // Optional prop to indicate if the button is for downloading
};

const ProjectCard = ({ title, description, imageUrl, buttonText, buttonUrl, isDownload }: ProjectCardProps) => {
  return (
    <div className="flex h-full flex-col gap-2 md:flex-row md:gap-0">
      <div className="border-retro-text group relative h-32 overflow-hidden rounded-lg border-4 transition-transform duration-500 ease-in-out md:h-auto md:w-2/5">
        <Image
          src={imageUrl}
          alt={title}
          sizes="(max-width: 768px) 100vw, 33vw"
          fill={true}
          className="w-full rounded object-cover transition-transform duration-500 ease-in-out group-hover:scale-125 md:h-full"
        />
      </div>
      <div className="flex w-full flex-col md:w-3/5 md:px-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="mb-6 h-auto flex-grow text-gray-600 md:min-h-24 dark:text-gray-400">{description}</p>
        <a
          href={buttonUrl}
          className="button px-6 py-2 text-center"
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

export type ProjectType = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: React.ReactNode;
  buttonUrl: string;
  isDownload: boolean;
};

export default function Projects({ projects }: { projects: ProjectType[] }) {
  return (
    <section className="mx-auto my-16 max-w-4xl px-4 md:px-0">
      <h2 className="border-retro-magenta dark:border-dark-magenta mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Featured Projects</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            buttonText={project.buttonText}
            buttonUrl={project.buttonUrl}
            isDownload={project.isDownload}
          />
        ))}
      </div>
    </section>
  );
}
