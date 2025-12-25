import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type FeaturedProjectType = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: React.ReactNode;
  buttonUrl: string;
};

type FeaturedProjectProps = {
  sectionTitle: string;
  projects: readonly FeaturedProjectType[];
};

export default function FeaturedProject({ sectionTitle, projects }: FeaturedProjectProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-lg font-medium tracking-widest uppercase">{sectionTitle}</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link key={index} href={project.buttonUrl} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col">
            {/* Image container with hover effect */}
            <div className="bg-dark-mono-accent relative overflow-hidden rounded-t-lg">
              <Image src={project.imageUrl} alt={project.title} width={800} height={600} className="aspect-4/3 w-full object-cover" />
              {/* Hover indicator */}
              <div className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/30 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRightIcon className="text-mono-accent size-5" />
              </div>
            </div>
            {/* Content */}
            <div className="bg-mono-bg dark:bg-dark-mono-bg border-mono-border dark:border-dark-mono-border flex flex-1 flex-col rounded-b-lg border-x border-b p-6">
              <h3 className="mb-2 text-xl font-semibold transition group-hover:underline">{project.title}</h3>
              <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-4 flex-1 text-sm leading-relaxed">{project.description}</p>
              <span className="text-mono-text-muted dark:text-dark-mono-text-muted inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
                {project.buttonText}
                <ArrowUpRightIcon className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
