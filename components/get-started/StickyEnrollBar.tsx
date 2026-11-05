'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

type StickyEnrollBarProps = {
  targetId: string;
  ctaHref: string;
};

export function StickyEnrollBar({ targetId, ctaHref }: StickyEnrollBarProps) {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setVisible(!entry.isIntersecting);
      },
      { rootMargin: '0px 0px -20% 0px', threshold: [0, 0.01, 0.5, 1] },
    );
    observerRef.current.observe(target);
    return () => {
      observerRef.current?.disconnect();
    };
  }, [targetId]);

  if (!visible) return <div className="h-0 lg:h-0" aria-hidden="true" />;

  return (
    <>
      {/* spacer to prevent footer overlap on mobile */}
      <div className="h-[74px] lg:h-0" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 bg-cream/90 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur supports-[backdrop-filter]:bg-cream/75 lg:hidden">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3">
          <p className="text-sm">
            Ready to enroll?
          </p>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById(targetId);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                trackEvent('enroll_bar_click', { source: 'get-started' });
              } else {
                window.location.hash = `#${targetId}`;
              }
            }}
            className={cn(
              'inline-flex items-center justify-center rounded-full bg-tile px-4 py-2 text-xs font-medium tracking-wide text-cream transition-colors hover:bg-[#a83b27]',
            )}
          >
            Enroll
          </button>
          <Link
            href={ctaHref}
            className="rounded-full border border-navy/15 px-3 py-2 text-[11px] font-medium tracking-[0.16em] text-stone uppercase transition-colors hover:border-navy/35 hover:text-ink"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </>
  );
}

