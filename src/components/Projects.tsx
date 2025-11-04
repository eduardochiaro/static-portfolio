import Image from 'next/image';
import Link from 'next/link';
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
  'border-accent-four dark:border-dark-accent-four',
  'border-accent-three dark:border-dark-accent-three',
  'border-accent-two dark:border-dark-accent-two',
  'border-accent-one dark:border-dark-accent-one',
];

const accentTextList = [
  'text-accent-four dark:text-dark-accent-four',
  'text-accent-three dark:text-dark-accent-three',
  'text-accent-two dark:text-dark-accent-two',
  'text-accent-one dark:text-dark-accent-one',
];

const backgroundAccentList = [
  'bg-accent-four dark:bg-dark-accent-four',
  'bg-accent-three dark:bg-dark-accent-three',
  'bg-accent-two dark:bg-dark-accent-two',
  'bg-accent-one dark:bg-dark-accent-one',
];

const ProjectCard = ({ title, description, imageUrl, buttonText, buttonUrl, isDownload, index }: ProjectCardProps) => {
  const borderAccent = accentBorderList[index % accentBorderList.length];
  const textAccent = accentTextList[index % accentTextList.length];
  const backgroundAccent = backgroundAccentList[index % backgroundAccentList.length];

  return (
    <div className={`group relative overflow-hidden rounded-xl border-6 ${borderAccent} ${backgroundAccent} transition duration-300`}>
      {/* Accent gradient bar on the left */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-1" />

      {/* Subtle scanlines overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10 [background:repeating-linear-gradient(0deg,rgba(50,30,24,.15)_0_1px,transparent_1px_3px)] dark:[background:repeating-linear-gradient(0deg,rgba(240,236,224,.12)_0_1px,transparent_1px_3px)]" />

      <div className="relative z-10 flex h-full flex-col md:flex-row">
        {/* Angled image panel */}
        <div className="bg-main dark:bg-dark-main relative -ml-6 h-40 overflow-hidden md:h-auto md:w-2/5 md:[clip-path:polygon(0%_0%,85%_0%,100%_100%,0%_100%)]">
          <div className="absolute inset-0 z-20 origin-bottom-left -skew-x-6">
            <Image
              src={imageUrl}
              alt={title}
              sizes="(max-width: 768px) 100vw, 33vw"
              fill={true}
              className="skew-x-6 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          {/* Neon ring on hover */}
          <div className="ring-accent-three dark:ring-dark-accent-three ring-offset-main dark:ring-offset-dark-main pointer-events-none absolute inset-0 ring-0 ring-offset-2 transition-[box-shadow,ring-width] duration-300 group-hover:ring-4" />
        </div>

        {/* Content */}
        <div className="flex w-full flex-col gap-3 px-4 py-4 md:w-3/5 md:px-6 md:py-6">
          <h3 className={`text-main text-xl font-bold tracking-wide uppercase md:text-lg`}>{title}</h3>
          <p className="text-main min-h-20 flex-grow text-sm opacity-90 md:min-h-12 md:text-xs">{description}</p>
          <div className="pt-2">
            <Link
              href={buttonUrl}
              className="button inline-block px-6 py-2 text-center text-base md:text-sm"
              download={isDownload}
              target={!isDownload ? '_blank' : undefined}
              rel={!isDownload ? 'noopener noreferrer' : undefined}
            >
              {buttonText}
            </Link>
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
      <h2 className="border-accent-three dark:border-dark-accent-three mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Featured Projects</h2>

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
