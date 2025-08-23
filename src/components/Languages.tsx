import SideModule from './SideModule';

const colorLevel = (level: string) => {
  switch (level) {
    case 'Native':
      return 'text-accent-four dark:text-dark-accent-four';
    case 'Fluent':
      return 'text-accent-three dark:text-dark-accent-three';
    case 'Intermediate':
      return 'text-accent-two dark:text-dark-accent-two';
    case 'Basic':
      return 'text-dark-main dark:text-dark-accent-one';
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
      titleColor="border-accent-one dark:border-dark-accent-one"
    />
  );
}
