'use client';

import { useEffect } from 'react';
import type { DemoHourRow } from '@/data/demos/types';

type HoursTodayProps = {
  hours: DemoHourRow[];
};

/** Highlights today's hours row in America/Los_Angeles and fills [data-today-text]. */
export function HoursToday({ hours }: HoursTodayProps) {
  useEffect(() => {
    const day = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      weekday: 'short',
    }).format(new Date());
    const row = hours.find((h) => h.day === day);
    if (!row) return;

    const listItem = document.querySelector(`[data-day="${day}"]`);
    if (listItem) listItem.classList.add('today');

    document.querySelectorAll('[data-today-text]').forEach((el) => {
      el.textContent = row.hoursText;
    });
  }, [hours]);

  return null;
}
