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

const backgroundAccentList = [
  'bg-accent-four dark:bg-dark-accent-four',
  'bg-accent-three dark:bg-dark-accent-three',
  'bg-accent-two dark:bg-dark-accent-two',
  'bg-accent-one dark:bg-dark-accent-one',
];

const ProjectCard = ({ title, description, imageUrl, buttonText, buttonUrl, isDownload }: ProjectCardProps) => {
  return (
    <article className="group">
      <Link href={buttonUrl} target={!isDownload ? '_blank' : undefined} rel={!isDownload ? 'noopener noreferrer' : undefined} className="block">
        <div className="bg-dark-mono-accent dark:bg-mono-text mb-4 overflow-hidden rounded p-2">
          <Image src={imageUrl} alt={title} width={800} height={450} className="aspect-video w-full object-cover transition-transform duration-300" />
        </div>
        <h3 className="mb-2 text-xl font-semibold transition group-hover:underline">{title}</h3>
        <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-4 text-sm leading-relaxed">{description}</p>
      </Link>
    </article>
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

export default function Projects({ projects }: { projects: readonly ProjectType[] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-lg font-medium tracking-widest uppercase">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
