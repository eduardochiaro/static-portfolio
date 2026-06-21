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
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading className="mb-8">{title}</SectionHeading>
      {imageUrl && (
        <div className="mb-8">
          <Image src={imageUrl} alt={title} width={600} height={450} loading="eager" className="mx-auto h-auto rounded-lg border object-cover md:w-1/2" />
        </div>
      )}
      <div className="text-mono-text-muted dark:text-dark-mono-text-muted space-y-4 text-base leading-relaxed">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {url && urlText && (
        <div className="mt-8">
          <ButtonLink href={url}>{urlText}</ButtonLink>
        </div>
      )}
    </section>
  );
}
