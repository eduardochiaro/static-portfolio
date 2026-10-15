import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import homeData from '@/data/metadata.json';
import Script from 'next/script';

// The site's primary face: variable (one file per style) and preloaded so first paint is already mono.
// A real monospace fallback, not next/font's metric-matched Arial, keeps a late load from flashing sans.
// ponytail: no italic file; nothing sets mono in italic. The browser synthesizes it if a note ever does.
const jetBrainsMono = JetBrains_Mono({
  style: ['normal'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
  adjustFontFallback: false,
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

const gaId = process.env.GOOGLE_ANALYTICS_ID;

export const viewport: Viewport = {
  themeColor: '#17150f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${ibmPlexSans.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content={homeData.home.title} />
      </head>
      <body>
        <a
          href="#main"
          className="focus:bg-mono-bg sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded focus:px-4 focus:py-2 focus:text-sm"
        >
          {homeData.a11y.skipLink}
        </a>
        {children}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
