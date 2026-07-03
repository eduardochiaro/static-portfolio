import Image from 'next/image';
import React from 'react';
import ButtonLink from './ButtonLink';
import SectionHeading from './SectionHeading';

const ProjectCard = ({ title, description, imageUrl, buttonText, buttonUrl }: ProjectType) => {
  return (
    <article className="group flex flex-col">
      <h3 className="group-hover:text-accent dark:group-hover:text-dark-accent mb-2 text-xl font-semibold transition">{title}</h3>
      <div className="bg-dark-mono-accent dark:bg-mono-text group-hover:glow-accent mb-4 overflow-hidden rounded p-2 transition duration-300">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={450}
          className="aspect-video w-full object-scale-down transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-4 flex-1 text-sm leading-relaxed">{description}</p>
      <div>
        <ButtonLink href={buttonUrl} target="_blank">
          {buttonText}
        </ButtonLink>
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
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading className="mb-8">Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
