import { DownloadIcon } from 'lucide-react';
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

const ProjectCard = ({ title, description, imageUrl, buttonText, buttonUrl, isDownload }: ProjectCardProps) => {
  return (
    <article className="group flex flex-col">
      <h3 className="mb-2 text-xl font-semibold transition">{title}</h3>
      <div className="bg-dark-mono-accent dark:bg-mono-text mb-4 overflow-hidden rounded p-2">
        <Image src={imageUrl} alt={title} width={800} height={450} className="aspect-video w-full object-scale-down transition-transform duration-300" />
      </div>
      <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-4 flex-1 text-sm leading-relaxed">{description}</p>
      <div>
        <Link
          href={buttonUrl}
          target={!isDownload ? '_blank' : undefined}
          rel={!isDownload ? 'noopener noreferrer' : undefined}
          className="border-mono-border dark:border-dark-mono-border text-mono-text-muted dark:text-dark-mono-text-muted bg-mono-bg dark:bg-dark-mono-bg hover:bg-mono-card dark:hover:bg-dark-mono-card hover:text-mono-text dark:hover:text-dark-mono-text inline-flex items-center gap-2 rounded border px-6 py-2 text-sm transition"
        >
          {buttonText}
          {isDownload ? <DownloadIcon className="size-3" /> : null}
        </Link>
      </div>
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
