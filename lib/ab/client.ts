'use client';

import { track as vercelTrack } from '@vercel/analytics';
import {
  AB_EVENTS,
  HP_VARIANT_COOKIE,
  HP_VISITOR_COOKIE,
  type AbEventName,
} from '@/lib/ab/constants';
import type { HomepageVariantId } from '@/data/homepage-variants';

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  if (!match) return null;
  return decodeURIComponent(match.slice(name.length + 1));
}

export function readAbVariant(): HomepageVariantId | null {
  const value = readCookie(HP_VARIANT_COOKIE);
  return value === 'a' || value === 'b' ? value : null;
}

export function readAbVisitorId(): string | null {
  return readCookie(HP_VISITOR_COOKIE);
}

function isAbEventName(value: string): value is AbEventName {
  return (AB_EVENTS as readonly string[]).includes(value);
}

export function trackAbEvent(
  event: AbEventName,
  extras: { path?: string; session_id?: string | null } = {},
): void {
  if (!isAbEventName(event)) return;
  const variant = readAbVariant();
  const visitorId = readAbVisitorId();
  if (!variant || !visitorId) return;

  const path =
    extras.path ??
    (typeof window !== 'undefined' ? window.location.pathname : '/');

  try {
    vercelTrack(event, { variant, path });
  } catch {
    // ignore analytics failures
  }

  try {
    const body = JSON.stringify({
      event,
      variant,
      path,
      visitor_id: visitorId,
      session_id: extras.session_id ?? null,
    });
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([body], { type: 'application/json' });
      navigator.sendBeacon('/api/ab-event', blob);
      return;
    }
    void fetch('/api/ab-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    });
  } catch {
    // ignore network failures
  }
}

const EXPOSURE_KEY = 'sbmc_hp_exposure_day';

/** Fire exposure once per visitor per UTC day while on the homepage. */
export function trackHomepageExposureOnce(): void {
  if (typeof window === 'undefined') return;
  const variant = readAbVariant();
  if (!variant) return;
  const today = new Date().toISOString().slice(0, 10);
  try {
    const prior = window.localStorage.getItem(EXPOSURE_KEY);
    if (prior === `${variant}:${today}`) return;
    window.localStorage.setItem(EXPOSURE_KEY, `${variant}:${today}`);
  } catch {
    // still fire if storage is blocked
  }
  trackAbEvent('exposure', { path: '/' });
}
