import { Metadata } from 'next';
import homeData from '../../../public/static/metadata.json';

export const metadata: Metadata = {
  title: homeData.resume.title + ' - Resume',
  description: homeData.resume.description,
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
