import metaData from '@/data/metadata.json';
import Image from 'next/image';
import React from 'react';
import ButtonLink from './ButtonLink';
import SectionHeading from './SectionHeading';

const ProjectCard = ({ title, description, imageUrl, buttonText, buttonUrl }: ProjectType) => {
  return (
    <article className="border-mono-border bg-mono-card group flex flex-col overflow-hidden rounded border">
      <div className="border-mono-border border-b p-2">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={450}
          className="aspect-video w-full rounded-xs object-scale-down transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="group-hover:text-accent mb-2 text-lg font-medium tracking-tight transition">{title}</h3>
        <p className="text-mono-text-muted mb-5 flex-1 font-sans text-base leading-relaxed">{description}</p>
        <div>
          <ButtonLink href={buttonUrl} target="_blank">
            {buttonText}
          </ButtonLink>
        </div>
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
};

export default function Projects({ projects }: { projects: readonly ProjectType[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading className="mb-7">{metaData.sections.projects}</SectionHeading>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
