'use client';

import { Suspense, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { StickyMobileCta } from '@/components/layout/StickyMobileCta';
import { JsonLd } from '@/components/seo/JsonLd';
import { AnalyticsScripts } from '@/components/seo/AnalyticsScripts';
import { AttributionCapture } from '@/components/analytics/AttributionCapture';
import { AbTracker } from '@/components/analytics/AbTracker';
import { BookCallProvider } from '@/components/booking/BookCallModal';
import { GhlChatWidget } from '@/components/seo/GhlChatWidget';
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from '@/lib/schema';

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname === '/demos' || pathname.startsWith('/demos/');
  const isAdmin = pathname === '/admin' || pathname.startsWith('/admin/');

  if (isDemo || isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <AnalyticsScripts />
      <Analytics />
      <BookCallProvider>
        <JsonLd
          data={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
        />
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCta />
        <Suspense fallback={null}>
          <AttributionCapture />
        </Suspense>
        <Suspense fallback={null}>
          <AbTracker />
        </Suspense>
        <GhlChatWidget />
      </BookCallProvider>
    </>
  );
}
