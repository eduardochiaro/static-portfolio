import ButtonLink from '@/components/ButtonLink';
import ErrorScreen from '@/components/ErrorScreen';
import metaData from '@/data/metadata.json';

export default function NotFound() {
  const { code, message, action } = metaData.errors.notFound;

  return (
    <ErrorScreen code={code} message={message}>
      <ButtonLink href="/">{action}</ButtonLink>
    </ErrorScreen>
  );
}
