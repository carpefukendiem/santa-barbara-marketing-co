'use client';

import { readClientAttribution } from '@/lib/attribution';

type InquiryNotifyInput = {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  message?: string;
  pagePath?: string;
  company_website?: string;
};

/**
 * Fire-and-forget inquiry notify. Never blocks the form success path.
 * Posts only to our server route; webhook URLs stay server-side.
 */
export function notifyInquiry(input: InquiryNotifyInput): void {
  try {
    const attribution = readClientAttribution();
    const pageUrl =
      typeof window !== 'undefined'
        ? window.location.href
        : input.pagePath
          ? input.pagePath
          : '';

    const body = JSON.stringify({
      name: input.name ?? '',
      email: input.email ?? '',
      phone: input.phone ?? '',
      business_name: input.businessName ?? '',
      message: input.message ?? '',
      page_url: pageUrl,
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      company_website: input.company_website ?? '',
    });

    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const sent = navigator.sendBeacon(
        '/api/inquiry-notify',
        new Blob([body], { type: 'application/json' }),
      );
      if (sent) return;
    }

    void fetch('/api/inquiry-notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {
      // Non-blocking; form already succeeded.
    });
  } catch {
    // Ignore client notify failures.
  }
}
