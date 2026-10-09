import ButtonLink from '@/components/ButtonLink';
import ErrorScreen from '@/components/ErrorScreen';
import metaData from '@/data/metadata.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function Forbidden() {
  const { code, message, action } = metaData.errors.forbidden;

  return (
    <ErrorScreen code={code} message={message}>
      <ButtonLink href="/">{action}</ButtonLink>
    </ErrorScreen>
  );
}
