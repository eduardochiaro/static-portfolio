import { formatMonthYear } from '@/lib/date';

export type AwardsType = {
  title: string;
  date: string;
};

export default function Awards({ awards }: { awards: readonly AwardsType[] }) {
  return (
    <section className="mb-12">
      <h3 className="mb-4 text-base font-medium tracking-widest uppercase">Awards</h3>
      <ul className="space-y-2 text-sm">
        {awards.map((award, index) => (
          <li key={index} className="flex justify-between">
            <span>{award.title}</span>
            <span className="text-mono-text-muted dark:text-dark-mono-text-muted">{formatMonthYear(award.date)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
