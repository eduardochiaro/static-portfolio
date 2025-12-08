import { bodyAttributes } from '@zero-ui/attributes';
import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import homeData from '@/data/metadata.json';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-imbplex-mono',
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
      color: '#fafafa',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#141414',
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
        <meta name="apple-mobile-web-app-title" content={homeData.home.title} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme') || 'light';
                if (savedTheme === 'dark' || (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body {...bodyAttributes}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
