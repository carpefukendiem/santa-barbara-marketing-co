'use client';

import { track as vercelTrack } from '@vercel/analytics';

type EventProps = Record<string, unknown> | undefined;

export function trackEvent(eventName: string, props?: EventProps): void {
  try {
    // Prefer GA/gtag if present
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: Array<Record<string, unknown>>;
    };
    if (typeof w.gtag === 'function') {
      w.gtag('event', eventName, props ?? {});
      return;
    }
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: eventName, ...(props ?? {}) });
      return;
    }
  } catch {
    // ignore and fall back to @vercel/analytics
  }
  try {
    vercelTrack(eventName, props as any);
  } catch {
    // no-op when analytics is unavailable
  }
}

export type AnalyticsEvent =
  | 'book_a_call_click'
  | 'lead_submit'
  | 'cta_click'
  | 'phone_click'
  | 'email_click';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}
