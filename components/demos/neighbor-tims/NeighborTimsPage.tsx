'use client';

import { useEffect } from 'react';
import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { neighborTimsMarkup } from './markup';
import './neighbor-tims.css';

/** Fills [data-pop] with the next 1st and 2nd Saturdays in America/Los_Angeles. */
function NeighborPopDates() {
  useEffect(() => {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).formatToParts(new Date());
    const g: Record<string, string> = {};
    parts.forEach((p) => {
      g[p.type] = p.value;
    });
    const year = Number(g['year']);
    const month = Number(g['month']);
    const dayNum = Number(g['day']);
    if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(dayNum)) {
      return;
    }
    const today = new Date(year, month - 1, dayNum);
    const out: Date[] = [];
    for (let m = 0; m < 3 && out.length < 2; m++) {
      const y = today.getFullYear();
      const mo = today.getMonth() + m;
      const d = new Date(y, mo, 1);
      while (d.getDay() !== 6) d.setDate(d.getDate() + 1);
      [0, 7].forEach((k) => {
        const x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + k);
        if (x >= today && out.length < 2) out.push(x);
      });
    }
    const fm = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
    document.querySelectorAll('[data-pop]').forEach((el) => {
      const i = Number(el.getAttribute('data-pop'));
      if (out[i]) el.textContent = fm.format(out[i]);
    });
  }, []);
  return null;
}

export function NeighborTimsPage({ demo }: { demo: DemoData }) {
  return (
    <>
      <NeighborPopDates />
      <DemoMarkupPage
        demo={demo}
        rootClassName="d-neighbor-tims"
        markup={neighborTimsMarkup}
        stripDayPrefix
      />
    </>
  );
}
