import ButtonLink from '@/components/ButtonLink';
import Typewriter from '@/components/Typewriter';
import metaData from '@/data/metadata.json';

export default function Forbidden() {
  const { code, message, action } = metaData.errors.forbidden;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="mb-4 text-6xl font-semibold tracking-tight">
        <Typewriter text={code} className="text-accent" />
      </h1>
      <p className="text-mono-text-muted mb-8 text-base">{message}</p>
      <ButtonLink href="/">{action}</ButtonLink>
    </div>
  );
}
