'use client';

import { useCallback, useEffect, useId } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { megaColumns, primaryCta } from '@/data/navigation';
import { getService } from '@/data/services';
import { getPrintService } from '@/data/printServices';

export function MegaMenu({
  open,
  onClose,
  triggerId,
}: {
  open: boolean;
  onClose: () => void;
  triggerId: string;
}) {
  const panelId = useId();

  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, handleKey]);

  if (!open) return null;

  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      className="absolute inset-x-0 top-full z-50 border-t border-rule bg-cream"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-10 lg:grid-cols-3 lg:px-14">
        {megaColumns.map((column) => (
          <div key={column.id} className={column.id === 'digital' ? 'lg:col-span-2' : ''}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
              {column.title}
            </p>
            <ul className={column.id === 'digital' ? 'mt-5 grid gap-4 sm:grid-cols-2' : 'mt-5 space-y-4'}>
              {column.links.map((link) => {
                const digital = getService(link.href.replace('/services/', ''));
                const print = getPrintService(link.href.replace('/services/', ''));
                const blurb = digital?.cardBlurb ?? print?.cardBlurb;
                return (
                  <li key={link.href}>
                    <Link href={link.href} className="block" onClick={onClose}>
                      <span className="font-display text-2xl text-ink">{link.label}</span>
                      {blurb ? (
                        <span className="mt-1 block text-sm text-stone">{blurb}</span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <div className="flex items-end">
          <Button href={primaryCta.href} onClick={onClose}>
            {primaryCta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
