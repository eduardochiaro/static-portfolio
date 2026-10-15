import metaData from '@/data/metadata.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { email, name } = metaData.author;
  const { authorLabel, text, links } = metaData.footer;

  return (
    <footer className="border-mono-border mt-24 border-t">
      <div className="text-mono-text-muted mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between pointer-coarse:gap-7">
        <span>
          <span className="max-sm:hidden">{`${authorLabel}: ${name} <`}</span>
          <a href={`mailto:${email}`} className="hover:text-accent tap-target transition">
            {email}
          </a>
          <span className="max-sm:hidden">{'>'}</span>
        </span>
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1 pointer-coarse:gap-y-7">
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent tap-target transition">
              {link.text}
              <span className="sr-only"> {metaData.a11y.newTab}</span>
            </a>
          ))}
          <span>
            {text} &middot; &copy; {currentYear}
          </span>
        </span>
      </div>
    </footer>
  );
}
