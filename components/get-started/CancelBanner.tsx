'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export function CancelBanner({ href, className }: { href: string; className?: string }) {
  useEffect(() => {
    trackEvent('checkout_cancelled');
  }, []);

  return (
    <div
      className={cn(
        'mx-auto mb-4 max-w-[1440px] px-6 lg:px-14',
        className,
      )}
    >
      <div className="rounded-xl border border-ochre/30 bg-ochre/10 p-4 text-ink backdrop-blur-sm">
        <p className="text-sm">
          Looks like checkout was cancelled. Want a quick 15‑minute call instead?
        </p>
        <p className="mt-2">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-full bg-tile px-3 py-1.5 text-[11px] font-medium tracking-[0.16em] text-cream uppercase transition-colors hover:bg-[#a83b27]"
          >
            Book a 15‑minute call
          </Link>
        </p>
      </div>
    </div>
  );
}

