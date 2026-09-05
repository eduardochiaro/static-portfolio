import metaData from '@/data/metadata.json';
import SectionHeading from '../SectionHeading';

export type LanguageType = {
  name: string;
  level: string;
};

export default function Languages({ languages }: { languages: readonly LanguageType[] }) {
  return (
    <section className="mb-10">
      <SectionHeading small className="mb-4">
        {metaData.sections.languages}
      </SectionHeading>
      <ul className="space-y-1 text-sm leading-loose">
        {languages.map((language) => (
          <li key={language.name} className="flex justify-between gap-4">
            <span>{language.name}</span>
            <span className="text-mono-text-muted">{language.level.toLowerCase()}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
