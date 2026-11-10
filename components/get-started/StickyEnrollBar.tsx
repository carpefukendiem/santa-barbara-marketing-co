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
  const [visible, setVisible] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    // Immediate first-read visibility (before IO callback fires)
    const frame = window.requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      const fullyInView = rect.top >= 0 && rect.bottom <= vh;
      setVisible(!fullyInView);
    });
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const fullyVisible =
          entry.isIntersecting && (entry as IntersectionObserverEntry).intersectionRatio >= 0.99;
        setVisible(!fullyVisible);
      },
      { rootMargin: '0px', threshold: [1.0] },
    );
    observerRef.current.observe(target);
    return () => {
      window.cancelAnimationFrame(frame);
      observerRef.current?.disconnect();
    };
  }, [targetId]);

  if (!visible) return <div className="h-0 lg:h-0" aria-hidden="true" />;

  return (
    <>
      {/* spacer to prevent footer overlap on mobile */}
      <div className="h-[74px] lg:h-0" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 bg-cream/95 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur supports-[backdrop-filter]:bg-cream/80 lg:hidden">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3">
          <p className="text-sm">Ready to enroll?</p>
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
              'inline-flex items-center justify-center rounded-full bg-tile px-5 py-2.5 text-xs font-medium tracking-wide text-cream transition-colors hover:bg-[#a83b27]',
            )}
          >
            Enroll now
          </button>
          {/* keep call link out of the fixed primary bar on mobile */}
        </div>
      </div>
    </>
  );
}

