'use client';

import { track as vercelTrack } from '@vercel/analytics';
import { useEffect } from 'react';

type DemoViewTrackerProps = {
  slug: string;
};

function beaconDemoView(slug: string): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const body = JSON.stringify({
      slug,
      referrer: document.referrer || '',
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      preview: params.get('preview') === '1',
    });

    if (typeof navigator.sendBeacon === 'function') {
      const sent = navigator.sendBeacon(
        '/api/demo-view',
        new Blob([body], { type: 'application/json' }),
      );
      if (sent) return;
    }

    void fetch('/api/demo-view', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {
      // Analytics beacon only.
    });
  } catch {
    // no-op
  }
}

export function DemoViewTracker({ slug }: DemoViewTrackerProps) {
  useEffect(() => {
    try {
      vercelTrack('demo_view', { slug });
    } catch {
      // no-op when analytics unavailable
    }

    try {
      const w = window as Window & {
        gtag?: (...args: unknown[]) => void;
      };
      if (typeof w.gtag === 'function') {
        w.gtag('event', 'demo_view', { slug });
      }
    } catch {
      // no-op
    }

    beaconDemoView(slug);
  }, [slug]);

  return null;
}
