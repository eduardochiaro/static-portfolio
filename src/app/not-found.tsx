import ButtonLink from '@/components/ButtonLink';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="mb-4 text-6xl font-semibold tracking-tight">404</h1>
      <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-8 text-base">The page you&apos;re looking for doesn&apos;t exist.</p>
      <ButtonLink href="/">Go Home</ButtonLink>
    </div>
  );
}
