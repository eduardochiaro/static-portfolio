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
    <footer className="border-dark-main dark:border-main z-50 mx-auto mt-16 flex max-w-4xl justify-between border-t-2 px-4 py-8 text-sm md:px-0 md:text-xs">
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <p key={index}>
            <Link
              href={link.url}
              target="_blank"
              prefetch={false}
              rel="noopener noreferrer"
              className="border-accent-two dark:border-dark-accent-two hover:bg-accent-two hover:text-main dark:hover:bg-dark-accent-two dark:hover:text-dark-main border-b-2"
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
