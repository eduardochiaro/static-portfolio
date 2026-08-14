import ButtonLink from '@/components/ButtonLink';
import Typewriter from '@/components/Typewriter';
export default function Forbidden() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="mb-4 text-6xl font-semibold tracking-tight">
        <Typewriter text={'403'} className="text-accent dark:text-dark-accent" />
      </h1>
      <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-8 text-base">You should not be here.</p>
      <ButtonLink href="/">Go Home</ButtonLink>
    </div>
  );
}
