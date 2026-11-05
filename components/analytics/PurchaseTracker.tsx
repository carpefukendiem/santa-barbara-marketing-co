'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export function PurchaseTracker() {
  useEffect(() => {
    trackEvent('purchase', { plan: '805-system' });
  }, []);
  return null;
}

