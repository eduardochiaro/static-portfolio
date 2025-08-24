import { formatMonthYear } from '@/lib/date';
import SideModule from './SideModule';

const colorTextList = [
  'text-accent-four dark:text-dark-accent-four',
  'text-accent-three dark:text-dark-accent-three',
  'text-accent-two dark:text-dark-accent-two',
  'text-dark-main dark:text-dark-accent-one',
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
