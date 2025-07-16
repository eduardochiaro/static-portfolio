import moment from 'moment';

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
    <section className="mb-16 px-4 md:px-0">
      <h2 className="border-retro-red dark:border-dark-red mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Awards</h2>

      <div className="mb-8 text-sm">
        <ul className="space-y-2">
          {awards.map((award, index) => (
            <li key={index} className="flex justify-between gap-4">
              <span>{award.title}</span>
              <span className={`${colorTextList[index % colorTextList.length]} text-right`}>{moment(award.date).format('MMM YYYY')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
