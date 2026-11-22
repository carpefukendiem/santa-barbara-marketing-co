'use client';

import { useEffect } from 'react';
import type { DemoHourRow } from '@/data/demos/types';

type HoursTodayProps = {
  hours: DemoHourRow[];
  /** Batch-2 mockups strip the weekday prefix from data-hours for the Today line. */
  stripDayPrefix?: boolean;
};

const DAY_ORDER: DemoHourRow['day'][] = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
];

function parseClock(raw: string): number | null {
  const m = raw
    .trim()
    .match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/i);
  if (!m || m[1] == null || m[3] == null) return null;
  let h = Number(m[1]);
  const min = m[2] ? Number(m[2]) : 0;
  const ap = m[3].toUpperCase();
  if (ap === 'AM') {
    if (h === 12) h = 0;
  } else if (h !== 12) {
    h += 12;
  }
  return h * 60 + min;
}

/** Pull open/close minutes from strings like "8 AM – 5 PM" or "8:00 - 5:00". */
function parseRange(hours: string): { open: number; close: number } | null {
  const cleaned = hours
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\s+to\s+/i, '-')
    .trim();
  if (/closed/i.test(cleaned)) return null;
  const parts = cleaned.split(/\s*-\s*/);
  const leftRaw = parts[0];
  const rightRaw = parts[1];
  if (leftRaw == null || rightRaw == null) return null;
  // Allow "8:00 – 5:00" without AM/PM by assuming daytime shop hours
  let left = leftRaw.trim();
  let right = rightRaw.trim();
  if (/^\d{1,2}(:\d{2})?$/.test(left) && /^\d{1,2}(:\d{2})?$/.test(right)) {
    left = `${left} AM`;
    right = `${right} PM`;
  }
  // If left lacks AM/PM but right has it, inherit
  if (!/[ap]m/i.test(left) && /[ap]m/i.test(right)) {
    const tip = right.match(/[ap]m/i)?.[0] ?? 'AM';
    // morning open when close is PM
    left = `${left} ${/pm/i.test(tip) ? 'AM' : tip}`;
  }
  const open = parseClock(left);
  const close = parseClock(right);
  if (open == null || close == null) return null;
  return { open, close };
}

function formatUntil(closeMin: number): string {
  let h = Math.floor(closeMin / 60);
  const m = closeMin % 60;
  const ap = h >= 12 ? 'PM' : 'AM';
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return m === 0 ? `${h} ${ap}` : `${h}:${String(m).padStart(2, '0')} ${ap}`;
}

function nextOpenLabel(
  hours: DemoHourRow[],
  fromDay: DemoHourRow['day'],
): string | null {
  const start = DAY_ORDER.indexOf(fromDay);
  for (let i = 1; i <= 7; i++) {
    const day = DAY_ORDER[(start + i) % 7];
    const row = hours.find((h) => h.day === day);
    if (!row || row.closed) continue;
    const range = parseRange(row.hours);
    if (!range) continue;
    return `${day} ${formatUntil(range.open)}`;
  }
  return null;
}

/** Highlights today's hours row and fills [data-today-text] / [data-open-status]. */
export function HoursToday({ hours, stripDayPrefix = false }: HoursTodayProps) {
  useEffect(() => {
    const now = new Date();
    const day = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      weekday: 'short',
    }).format(now) as DemoHourRow['day'];

    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      hour: 'numeric',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(now);
    const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);
    const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
    const nowMin = hour * 60 + minute;

    const row = hours.find((h) => h.day === day);

    document.querySelectorAll('[data-day]').forEach((el) => {
      const days = (el.getAttribute('data-day') || '').split(/\s+/).filter(Boolean);
      if (days.includes(day)) el.classList.add('today');
    });

    if (row) {
      const text = stripDayPrefix
        ? row.hoursText.replace(/^\w+ /, '')
        : row.hoursText;
      document.querySelectorAll('[data-today-text]').forEach((el) => {
        el.textContent = text;
      });
    }

    let status = 'Hours vary';
    if (!row || row.closed) {
      const next = nextOpenLabel(hours, day);
      status = next ? `Closed · opens ${next}` : 'Closed today';
    } else {
      const range = parseRange(row.hours);
      if (!range) {
        status = stripDayPrefix
          ? row.hoursText.replace(/^\w+ /, '')
          : row.hoursText;
      } else if (nowMin >= range.open && nowMin < range.close) {
        status = `Open now · until ${formatUntil(range.close)}`;
      } else if (nowMin < range.open) {
        status = `Closed · opens ${formatUntil(range.open)}`;
      } else {
        const next = nextOpenLabel(hours, day);
        status = next ? `Closed · opens ${next}` : 'Closed for today';
      }
    }

    document.querySelectorAll('[data-open-status]').forEach((el) => {
      el.textContent = status;
    });
  }, [hours, stripDayPrefix]);

  return null;
}
