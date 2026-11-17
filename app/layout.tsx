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
  preload: true,
});

const inter = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono-jb',
  weight: '500',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Santa Barbara Marketing Co. | Digital Marketing Agency in Santa Barbara, CA',
    template: '%s | Santa Barbara Marketing Co.',
  },
  description:
    'Digital marketing for Santa Barbara, Goleta, Montecito, and Carpinteria. Local SEO, websites, Google Ads, and follow-up that turns attention into booked work.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Santa Barbara Marketing Co.',
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
        <link rel="preconnect" href={booking.origin} crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={booking.origin} />
        <link rel="preload" as="script" href={booking.scriptSrc} />
      </head>
      <body className="font-sans antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
