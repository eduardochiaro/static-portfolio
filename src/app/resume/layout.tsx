import type { Metadata } from 'next';
import homeData from '@/data/metadata.json';

export const metadata: Metadata = {
  title: homeData.resume.title,
  description: homeData.resume.description,
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
