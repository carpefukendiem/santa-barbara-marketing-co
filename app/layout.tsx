import type { Metadata } from 'next';
import { Inter_Tight, JetBrains_Mono, Source_Serif_4 } from 'next/font/google';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { SITE_URL } from '@/lib/siteUrl';
import { booking } from '@/lib/booking';
import './globals.css';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
  style: 'normal',
  // Preload only the ATF headline face (one woff2).
  preload: true,
  adjustFontFallback: true,
});

// Italic ships for pull-quotes / closers but is not preloaded (below-fold on mobile).
const sourceSerifItalic = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif-italic',
  style: 'italic',
  preload: false,
  adjustFontFallback: true,
});

const inter = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: false,
  adjustFontFallback: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono-jb',
  weight: '500',
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SBMC | Digital Marketing Agency Santa Barbara',
    template: '%s | SBMC',
  },
  description:
    'Digital marketing for Santa Barbara County. Local SEO, websites, Google Ads, and follow-up that turns attention into booked work.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Santa Barbara Marketing Co',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${sourceSerifItalic.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href={booking.origin} />
      </head>
      <body className="font-sans antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
