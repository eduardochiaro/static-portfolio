export type LanguageType = {
  name: string;
  level: string;
};

export default function Languages({ languages }: { languages: readonly LanguageType[] }) {
  return (
    <section className="mb-12">
      <h3 className="mb-4 text-base font-medium tracking-widest uppercase">Languages</h3>
      <ul className="space-y-2 text-sm">
        {languages.map((language, index) => (
          <li key={index} className="flex justify-between">
            <span>{language.name}</span>
            <span className="text-mono-text-muted dark:text-dark-mono-text-muted">{language.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
