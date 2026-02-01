import Image from 'next/image';
import React from 'react';
import ButtonLink from "./ButtonLink";

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
      <h2 className="mb-8 text-lg font-medium tracking-widest uppercase">{title}</h2>
      {imageUrl && (
        <div className="mb-8">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={450}
            className="object-cover"
          />
        </div>
      )}
      <div className="text-mono-text-muted dark:text-dark-mono-text-muted max-w-3xl space-y-4 text-base leading-relaxed">
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
