import Image from 'next/image';
import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string | React.ReactNode; // Allow string or React node for button text
  buttonUrl: string;
  isDownload?: boolean; // Optional prop to indicate if the button is for downloading
  index: number; // Used to cycle accent colors
};

const accentBorderList = [
  'border-retro-purple dark:border-dark-purple',
  'border-retro-magenta dark:border-dark-magenta',
  'border-retro-red dark:border-dark-red',
  'border-retro-orange dark:border-dark-orange',
];

const accentTextList = [
  'text-retro-purple dark:text-dark-purple',
  'text-retro-magenta dark:text-dark-magenta',
  'text-retro-red dark:text-dark-red',
  'text-retro-orange dark:text-dark-orange',
];

const ProjectCard = ({ title, description, imageUrl, buttonText, buttonUrl, isDownload, index }: ProjectCardProps) => {
  const borderAccent = accentBorderList[index % accentBorderList.length];
  const textAccent = accentTextList[index % accentTextList.length];

  return (
    <div
      className={`group relative overflow-hidden rounded border-4 ${borderAccent} bg-retro-bg dark:bg-dark-bg hover:dark:shadow-[0.5rem_0.5rem_rgb(255,255,255) transition duration-200 hover:-translate-2 hover:shadow-[0.5rem_0.5rem_rgb(0,0,0)]`}
    >
      {/* Accent gradient bar on the left */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-1" />

      {/* Subtle scanlines overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10 [background:repeating-linear-gradient(0deg,rgba(50,30,24,.15)_0_1px,transparent_1px_3px)] dark:[background:repeating-linear-gradient(0deg,rgba(240,236,224,.12)_0_1px,transparent_1px_3px)]" />

      <div className="relative z-10 flex h-full flex-col md:flex-row">
        {/* Angled image panel */}
        <div className="relative -ml-6 h-40 overflow-hidden [clip-path:polygon(0%_0%,85%_0%,100%_100%,0%_100%)] md:h-auto md:w-2/5">
          <div className="absolute inset-0 origin-bottom-left -skew-x-6">
            <Image
              src={imageUrl}
              alt={title}
              sizes="(max-width: 768px) 100vw, 33vw"
              fill={true}
              className="skew-x-6 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          {/* Neon ring on hover */}
          <div className="ring-retro-magenta dark:ring-dark-magenta ring-offset-retro-bg dark:ring-offset-dark-bg pointer-events-none absolute inset-0 ring-0 ring-offset-2 transition-[box-shadow,ring-width] duration-300 group-hover:ring-4" />
        </div>

        {/* Content */}
        <div className="flex w-full flex-col gap-3 px-4 py-4 md:w-3/5 md:px-6 md:py-6">
          <h3 className={`text-xl font-bold tracking-wide uppercase ${textAccent}`}>{title}</h3>
          <p className="min-h-20 flex-grow text-sm opacity-90 md:min-h-24">{description}</p>
          <div className="pt-2">
            <a
              href={buttonUrl}
              className="button inline-block px-6 py-2 text-center"
              download={isDownload}
              target={!isDownload ? '_blank' : undefined}
              rel={!isDownload ? 'noopener noreferrer' : undefined}
            >
              {buttonText}
            </a>
          </div>
        </div>
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
    <section className="relative mx-auto my-16 max-w-4xl px-4 md:px-0">
      <h2 className="border-retro-magenta dark:border-dark-magenta mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Featured Projects</h2>

      {/* Background grid accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 [background-size:24px_24px] opacity-10 [background:linear-gradient(90deg,rgba(50,30,24,.08)_1px,transparent_1px),linear-gradient(rgba(50,30,24,.08)_1px,transparent_1px)] dark:[background:linear-gradient(90deg,rgba(240,236,224,.08)_1px,transparent_1px),linear-gradient(rgba(240,236,224,.08)_1px,transparent_1px)]" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
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
