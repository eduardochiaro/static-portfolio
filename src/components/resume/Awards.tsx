import metaData from '@/data/metadata.json';
import SectionHeading from '../SectionHeading';

export type AwardsType = {
  title: string;
  date: string;
};

export default function Awards({ awards }: { awards: readonly AwardsType[] }) {
  return (
    <section className="mb-10">
      <SectionHeading small className="mb-4">
        {metaData.sections.awards}
      </SectionHeading>
      <ul className="space-y-3 text-sm">
        {awards.map((award) => (
          <li key={award.title} className="flex flex-col gap-1">
            <span className="text-sha">v{award.date.slice(0, 7).replace('-', '.')}</span>
            <span className="text-mono-text-muted">{award.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
