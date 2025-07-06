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

export default function Languages({ languages }: { languages: { name: string; level: string }[] }) {
  return (
    <section className="mb-16">
      <h2 className="border-retro-orange dark:border-dark-orange mb-6 -ml-6 border-l-4 pl-4 text-xl font-bold uppercase">Languages</h2>
      <div className="mb-8 text-sm">
        <ul className="space-y-2">
          {languages.map((language, index) => (
            <li key={index} className="flex justify-between gap-4">
              <span>{language.name}</span>
              <span className={colorLevel(language.level)}>{language.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
