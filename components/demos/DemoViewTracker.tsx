'use client';

import { track as vercelTrack } from '@vercel/analytics';
import { useEffect } from 'react';

type DemoViewTrackerProps = {
  slug: string;
};

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
  }, [slug]);

  return null;
}
