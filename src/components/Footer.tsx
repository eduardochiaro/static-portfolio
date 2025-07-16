import Link from 'next/link';

export type FooterProps = {
  text: string;
  links: {
    text: string;
    url: string;
  }[];
};

export default function Footer({ text, links }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-retro-text dark:border-dark-text z-50 mx-auto mt-16 flex max-w-4xl justify-between border-t-2 px-4 py-8 text-sm md:px-0">
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <p key={index}>
            <Link
              href={link.url}
              target="_blank"
              prefetch={false}
              rel="noopener noreferrer"
              className="border-retro-red dark:border-dark-red hover:bg-retro-red hover:text-retro-bg dark:hover:bg-dark-red dark:hover:text-dark-bg border-b-2"
            >
              {link.text}
            </Link>
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-3 text-right">
        <p>{text}</p>
        <p>&copy; {currentYear}</p>
      </div>
    </footer>
  );
}
