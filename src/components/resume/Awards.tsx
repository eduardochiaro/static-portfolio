import { formatMonthYear } from '@/lib/date';
import SideModule from './SideModule';

const colorTextList = [
  'decoration-accent-four dark:decoration-dark-accent-four',
  'decoration-accent-three dark:decoration-dark-accent-three',
  'decoration-accent-two dark:decoration-dark-accent-two',
  'decoration-dark-main dark:decoration-dark-accent-one',
];

export type AwardsType = {
  title: string;
  date: string;
};

export default function Awards({ awards }: { awards: AwardsType[] }) {
  return (
    <SideModule
      title="Awards"
      list={awards.map((award, index) => ({
        title: award.title,
        value: formatMonthYear(award.date),
        color: colorTextList[index % colorTextList.length], // cycle through colors based on month
      }))}
      titleColor="border-accent-two dark:border-dark-accent-two"
    />
  );
}
