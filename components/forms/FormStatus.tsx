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
        className="border-t border-rule py-8"
      >
        <p className="font-display text-2xl text-ink">
          Thanks — we will reply with a next step within one business day.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="alert"
      className="mb-4 border-t-2 border-tile py-4 text-sm text-ink"
    >
      {error} You can also email{' '}
      <a className="underline" href={`mailto:${site.email}`}>
        {site.email}
      </a>
      .
    </div>
  );
}
