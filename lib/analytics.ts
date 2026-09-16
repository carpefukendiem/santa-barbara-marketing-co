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
