import { bodyAttributes } from '@zero-ui/attributes';
import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import homeData from '../../public/static/metadata.json';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: homeData.home.title,
  description: homeData.home.description,
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#F9FBEF',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#1C2826',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${ibmPlexMono.variable} antialiased`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Eduardo Chiaro" />
      </head>
      <body {...bodyAttributes}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
