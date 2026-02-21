import { bodyAttributes } from '@zero-ui/attributes';
import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import homeData from '@/data/metadata.json';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-ibmplex-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: homeData.home.title,
  description: homeData.home.description,
  metadataBase: new URL('https://eduardochiaro.com'),
  openGraph: {
    title: homeData.home.title,
    description: homeData.home.description,
    url: 'https://eduardochiaro.com',
    siteName: homeData.home.title,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: homeData.home.title,
    description: homeData.home.description,
  },
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
        <a
          href="#main"
          className="focus:bg-mono-bg focus:dark:bg-dark-mono-bg sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to main content
        </a>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
