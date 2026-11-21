'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { isBookingConfirmedMessage } from '@/lib/bookingEvents';
import { booking } from '@/lib/booking';
import {
  readAbVariant,
  trackAbEvent,
  trackHomepageExposureOnce,
} from '@/lib/ab/client';

/**
 * Client-side A/B funnel tracking. Does not modify Stripe, checkout API, or
 * webhook code. checkout_start is inferred from successful POST /api/checkout
 * responses via a fetch monkey-patch on /get-started only.
 */
export function AbTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!readAbVariant()) return;

    if (pathname === '/' || pathname.startsWith('/hp/')) {
      trackHomepageExposureOnce();
    }
    if (pathname === '/get-started') {
      trackAbEvent('get_started_view', { path: '/get-started' });
    }
    if (pathname === '/book-a-call') {
      trackAbEvent('book_call_view', { path: '/book-a-call' });
    }
    if (pathname === '/get-started/started') {
      const sessionId = searchParams.get('session_id');
      trackAbEvent('checkout_complete', {
        path: '/get-started/started',
        session_id: sessionId,
      });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!readAbVariant()) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      const label = (anchor.textContent ?? '').replace(/\s+/g, ' ').trim();

      if (href === '/get-started' || href.startsWith('/get-started?')) {
        const looksPrimary =
          /start the plan/i.test(label) ||
          /start the local lead plan/i.test(label) ||
          anchor.className.includes('heroCta') ||
          anchor.className.includes('priceCta') ||
          anchor.className.includes('closeBtn');
        if (looksPrimary || pathname === '/' || pathname.startsWith('/hp/')) {
          trackAbEvent('start_plan_click', { path: pathname });
        }
      }

      if (href === '/book-a-call' || href.startsWith('/book-a-call?')) {
        trackAbEvent('book_call_click', { path: pathname });
      }
    }
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/get-started') return;
    if (!readAbVariant()) return;

    const original = window.fetch.bind(window);
    window.fetch = async (...args: Parameters<typeof fetch>) => {
      const response = await original(...args);
      try {
        const input = args[0];
        const url =
          typeof input === 'string'
            ? input
            : input instanceof URL
              ? input.href
              : input.url;
        const method =
          (args[1]?.method ??
            (typeof input !== 'string' && !(input instanceof URL)
              ? input.method
              : 'GET')) || 'GET';
        if (
          method.toUpperCase() === 'POST' &&
          url.includes('/api/checkout') &&
          response.ok
        ) {
          trackAbEvent('checkout_start', { path: '/get-started' });
        }
      } catch {
        // ignore
      }
      return response;
    };

    return () => {
      window.fetch = original;
    };
  }, [pathname]);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (!readAbVariant()) return;
      if (event.origin !== booking.origin) return;
      if (!isBookingConfirmedMessage(event.data)) return;
      try {
        if (window.sessionStorage.getItem('sbmc_ab_booking_complete')) return;
        window.sessionStorage.setItem('sbmc_ab_booking_complete', '1');
      } catch {
        // continue
      }
      trackAbEvent('booking_complete', { path: pathname });
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [pathname]);

  return null;
}
