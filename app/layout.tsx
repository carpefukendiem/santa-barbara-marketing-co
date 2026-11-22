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
  style: ['normal', 'italic'],
  // Preload only the display face used in the ATF headline.
  preload: true,
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
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="dns-prefetch" href={booking.origin} />
      </head>
      <body className="font-sans antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
