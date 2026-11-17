'use client';

import { useEffect } from 'react';
import type { DemoHourRow } from '@/data/demos/types';

type HoursTodayProps = {
  hours: DemoHourRow[];
  /** Batch-2 mockups strip the weekday prefix from data-hours for the Today line. */
  stripDayPrefix?: boolean;
};

/** Highlights today's hours row in America/Los_Angeles and fills [data-today-text]. */
export function HoursToday({ hours, stripDayPrefix = false }: HoursTodayProps) {
  useEffect(() => {
    const day = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      weekday: 'short',
    }).format(new Date());
    const row = hours.find((h) => h.day === day);
    if (!row) return;

    const listItem = document.querySelector(`[data-day="${day}"]`);
    if (listItem) listItem.classList.add('today');

    const text = stripDayPrefix
      ? row.hoursText.replace(/^\w+ /, '')
      : row.hoursText;

    document.querySelectorAll('[data-today-text]').forEach((el) => {
      el.textContent = text;
    });
  }, [hours, stripDayPrefix]);

  return null;
}
