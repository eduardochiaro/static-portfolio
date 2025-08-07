import SideModule from './SideModule';

const colorLevel = (level: string) => {
  switch (level) {
    case 'Native':
      return 'text-retro-purple dark:text-dark-purple';
    case 'Fluent':
      return 'text-retro-magenta dark:text-dark-magenta';
    case 'Intermediate':
      return 'text-retro-red dark:text-dark-red';
    case 'Basic':
      return 'text-retro-text dark:text-dark-orange';
    default:
      return '';
  }
};

export type LanguageType = {
  name: string;
  level: string;
};

export default function Languages({ languages }: { languages: LanguageType[] }) {
  return (
    <SideModule
      title="Languages"
      list={languages.map((language) => ({
        title: language.name,
        value: language.level,
        color: colorLevel(language.level), // Use the colorLevel function to determine the text color
      }))}
      titleColor="border-retro-orange dark:border-dark-orange"
    />
  );
}
