import metaData from '@/data/metadata.json';
import Image from 'next/image';
import React from 'react';
import ButtonLink from './ButtonLink';
import SectionHeading from './SectionHeading';

type FeaturedProjectProps = {
  title: string;
  imageUrl?: string;
  description: readonly string[];
  url?: string;
  urlText?: React.ReactNode;
};

export default function FeaturedProject({ title, imageUrl, description, url, urlText }: FeaturedProjectProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading className="mb-7">branch: {title.toLowerCase()}</SectionHeading>
      <div className="border-mono-border bg-mono-card overflow-hidden rounded border">
        {imageUrl && (
          <div className="border-mono-border border-b p-2">
            <Image src={imageUrl} alt={title} width={600} height={450} loading="eager" className="mx-auto h-auto rounded-xs object-cover md:w-1/2" />
          </div>
        )}
        <div className="p-6">
          <p className="text-mono-text-muted mb-4 text-sm">{metaData.sections.readme}</p>
          <div className="text-mono-text-muted max-w-3xl space-y-4 font-sans text-base leading-relaxed">
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {url && urlText && (
            <div className="mt-6">
              <ButtonLink href={url}>{urlText}</ButtonLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
