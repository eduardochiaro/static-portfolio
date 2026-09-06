import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import homeData from '@/data/metadata.json';
import { GoogleAnalytics } from '@next/third-parties/google';

const jetBrainsMono = JetBrains_Mono({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  preload: false,
});

// Running prose only — headings and chrome stay in the mono cut.
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-ibmplex-sans',
  subsets: ['latin'],
  preload: false,
});

export const metadata: Metadata = {
  title: homeData.home.title,
  description: homeData.home.description,
  metadataBase: new URL(homeData.site.url),
  openGraph: {
    title: homeData.home.title,
    description: homeData.home.description,
    url: homeData.site.url,
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
  themeColor: '#17150f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${ibmPlexSans.variable} antialiased`}>
      <head>
        <meta name="apple-mobile-web-app-title" content={homeData.home.title} />
      </head>
      <body>
        <a
          href="#main"
          className="focus:bg-mono-bg focus: sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ''} />
    </html>
  );
}
