export type AnalyticsEvent =
  | 'growth_plan_click'
  | 'contact_form_submit'
  | 'growth_plan_submit'
  | 'form_error'
  | 'phone_click'
  | 'email_click'
  | 'service_cta_click'
  | 'location_card_click'
  | 'case_study_click'
  | 'resource_click'
  | 'nav_open_mobile'
  | 'faq_open';

export type AnalyticsPayload = Record<string, string | number>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: AnalyticsEvent, payload?: AnalyticsPayload): void {
  try {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...payload });
  } catch {
    // Never throw from analytics.
  }
}
