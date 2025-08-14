import { formatMonthYear } from '@/lib/date';
import SideModule from './SideModule';

const colorTextList = [
  'text-retro-purple dark:text-dark-purple',
  'text-retro-magenta dark:text-dark-magenta',
  'text-retro-red dark:text-dark-red',
  'text-retro-text dark:text-dark-orange',
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
      titleColor="border-retro-red dark:border-dark-red"
    />
  );
}
