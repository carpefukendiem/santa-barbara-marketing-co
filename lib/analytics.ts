'use client';

import { track as vercelTrack } from '@vercel/analytics';
import { ga4MeasurementId } from '@/lib/ga4';

type EventProps = Record<string, unknown> | undefined;

function analyticsProps(
  props: EventProps,
): Record<string, string | number | boolean> | undefined {
  if (!props) return undefined;
  const safe: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(props)) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      safe[key] = value;
    }
  }
  return safe;
}

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
    vercelTrack(eventName, analyticsProps(props));
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

type Gtag = (...args: unknown[]) => void;

export function trackGa4(eventName: string, params: Record<string, unknown> = {}): void {
  if (!ga4MeasurementId()) return;
  if (typeof window === 'undefined') return;
  const w = window as Window & { gtag?: Gtag };
  if (typeof w.gtag !== 'function') return;
  w.gtag('event', eventName, params);
}
