import { Metadata } from 'next';
import homeData from '@/data/metadata.json';

export const metadata: Metadata = {
  title: homeData.pebble.title,
  description: homeData.pebble.description,
};

export default function PebbleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
