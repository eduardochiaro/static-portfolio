import { formatMonthYear } from '@/lib/date';

export type AwardsType = {
  title: string;
  date: string;
};

export default function Awards({ awards }: { awards: readonly AwardsType[] }) {
  return (
    <section className="mb-12">
      <h3 className="mb-4 flex items-center gap-2 text-base font-medium tracking-widest uppercase">
        <span className="text-accent dark:text-dark-accent" aria-hidden="true">
          {'//'}
        </span>
        Awards
      </h3>
      <ul className="space-y-2 text-sm">
        {awards.map((award, index) => (
          <li key={index} className="flex flex-col justify-between gap-2">
            <span>{award.title}</span>
            <span className="text-mono-text-muted dark:text-dark-mono-text-muted text-nowrap">{formatMonthYear(award.date)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
