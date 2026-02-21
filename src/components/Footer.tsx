import Link from 'next/link';

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
              <Link
                href={link.url}
                target="_blank"
                prefetch={false}
                rel="noopener noreferrer"
                className="hover:text-mono-text dark:hover:text-dark-mono-text transition"
              >
                {link.text}
              </Link>
            </p>
          ))}
        </div>
        <div className="text-mono-text-muted dark:text-dark-mono-text-muted text-center md:text-right">
          <p className="mb-2">{text}</p>
          <p>&copy; {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
