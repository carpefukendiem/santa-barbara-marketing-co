'use client';

import { useEffect, useRef } from 'react';
import { site } from '@/data/site';

export function FormStatus({
  state,
  error,
}: {
  state: 'success' | 'error';
  error?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  if (state === 'success') {
    return (
      <div
        ref={ref}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-[12px] border border-sbmc-border bg-sbmc-white p-8 shadow-card"
      >
        <h3 className="text-heading-sm">We received it.</h3>
        <p className="mt-3 text-body-sm text-sbmc-ink-muted">
          A person will follow up. If you requested a Growth Plan, expect it{' '}
          {site.growthPlanTurnaround}. Check your inbox, including spam, for the
          walkthrough invitation.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="alert"
      className="mb-4 rounded-[8px] border border-[#e8c4c4] bg-[#fdf2f2] p-4 text-sm text-[#7a1f1f]"
    >
      {error} You can also email{' '}
      <a className="underline" href={`mailto:${site.email}`}>
        {site.email}
      </a>
      .
    </div>
  );
}
