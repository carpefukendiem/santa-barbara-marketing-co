'use client';

import { Suspense, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { StickyMobileCta } from '@/components/layout/StickyMobileCta';
import { JsonLd } from '@/components/seo/JsonLd';
import { AnalyticsScripts } from '@/components/seo/AnalyticsScripts';
import { AttributionCapture } from '@/components/analytics/AttributionCapture';
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

  if (isDemo) {
    return <>{children}</>;
  }

  return (
    <>
      <AnalyticsScripts />
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
        <GhlChatWidget />
      </BookCallProvider>
    </>
  );
}
