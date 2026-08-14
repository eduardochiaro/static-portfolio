import LogoIcon from './icons/Logo';

export type FooterProps = {
  text: string;
  links: readonly {
    readonly text: string;
    readonly url: string;
  }[];
};

export default function Footer({ text, links }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-12 text-sm md:flex-row">
        <div>
          {links.map((link, index) => (
            <p key={index} className="text-mono-text-muted dark:text-dark-mono-text-muted mb-2">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-dark-accent transition">
                {link.text}
              </a>
            </p>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="text-mono-text-muted dark:text-dark-mono-text-muted text-center md:text-right">
            <p className="mb-2">{text}</p>
            <p>&copy; {currentYear}</p>
          </div>
          <LogoIcon className="fill-accent dark:fill-mono-bg size-12" />
        </div>
      </div>
    </footer>
  );
}
