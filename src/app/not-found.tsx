import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="mb-4 text-6xl font-semibold tracking-tight">404</h1>
      <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-8 text-base">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="border-mono-border dark:border-dark-mono-border text-mono-text-muted dark:text-dark-mono-text-muted bg-mono-bg dark:bg-dark-mono-bg hover:bg-mono-card dark:hover:bg-dark-mono-card hover:text-mono-text dark:hover:text-dark-mono-text rounded border px-6 py-2 text-sm transition"
      >
        Go Home
      </Link>
    </div>
  );
}
