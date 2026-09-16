import type { Metadata } from 'next';
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { StickyMobileCta } from '@/components/layout/StickyMobileCta';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import { AnalyticsScripts } from '@/components/seo/AnalyticsScripts';
import { BookCallProvider } from '@/components/booking/BookCallModal';
import { GhlChatWidget } from '@/components/seo/GhlChatWidget';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz'],
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://santabarbaramarketingco.com',
  ),
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <BookCallProvider>
          <JsonLd data={[organizationSchema(), websiteSchema()]} />
          <SkipLink />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <StickyMobileCta />
          <AnalyticsScripts />
          <GhlChatWidget />
        </BookCallProvider>
      </body>
    </html>
  );
}
