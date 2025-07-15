import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-retro-text dark:border-dark-text z-50 mx-auto mt-16 flex max-w-4xl justify-between border-t-2 px-4 py-8 text-sm md:px-0">
      <div className="flex flex-col gap-3">
        <p>
          <Link
            href="mailto:me@eduardochiaro.com"
            className="border-retro-red dark:border-dark-red hover:bg-retro-red hover:text-retro-bg dark:hover:bg-dark-red dark:hover:text-dark-bg border-b-2"
          >
            me@eduardochiaro.com
          </Link>
        </p>
        <p>
          <Link
            href="https://github.com/eduardochiaro"
            target="_blank"
            className="border-retro-red dark:border-dark-red hover:bg-retro-red hover:text-retro-bg dark:hover:bg-dark-red dark:hover:text-dark-bg border-b-2"
          >
            github.com/eduardochiaro
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-3 text-right">
        <p>Made with ♥</p>
        <p>&copy; {currentYear}</p>
      </div>
    </footer>
  );
}
