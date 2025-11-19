import SideModule from './SideModule';

const colorLevel = (level: string) => {
  switch (level) {
    case 'Native':
      return 'decoration-accent-four dark:decoration-dark-accent-four';
    case 'Fluent':
      return 'decoration-accent-three dark:decoration-dark-accent-three';
    case 'Intermediate':
      return 'decoration-accent-two dark:decoration-dark-accent-two';
    case 'Basic':
      return 'decoration-dark-main dark:decoration-dark-accent-one';
    default:
      return '';
  }
};

export type LanguageType = {
  name: string;
  level: string;
};

export default function Languages({ languages }: { languages: readonly LanguageType[] }) {
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
