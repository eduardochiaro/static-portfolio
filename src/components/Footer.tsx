import metaData from '@/data/metadata.json';

export type FooterProps = {
  text: string;
  links: readonly {
    readonly text: string;
    readonly url: string;
  }[];
};

export default function Footer({ text, links }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { email, name } = metaData.author;
  const { authorLabel } = metaData.footer;

  return (
    <footer className="border-mono-border mt-24 border-t">
      <div className="text-mono-text-muted mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <span>
          {`${authorLabel}: ${name} <`}
          <a href={`mailto:${email}`} className="hover:text-accent transition">
            {email}
          </a>
          {'>'}
        </span>
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              {link.text}
            </a>
          ))}
          <span>
            &middot; {text} &middot; &copy; {currentYear}
          </span>
        </span>
      </div>
    </footer>
  );
}
