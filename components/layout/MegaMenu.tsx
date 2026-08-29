'use client';

import { useCallback, useEffect, useId, useRef } from 'react';
import Link from 'next/link';
import { megaColumns, primaryCta } from '@/data/navigation';
import { Button } from '@/components/ui/Button';

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
  const ref = useRef<HTMLDivElement>(null);

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
      ref={ref}
      role="region"
      aria-labelledby={triggerId}
      className="absolute left-1/2 top-full z-50 mt-3 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 rounded-[12px] border border-sbmc-border bg-sbmc-white shadow-lift"
    >
      <div className="grid gap-8 p-8 md:grid-cols-3">
        {megaColumns.map((column) => (
          <div key={column.id}>
            <p className="text-eyebrow text-sbmc-teal">{column.title}</p>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-1 py-1.5 text-[0.95rem] text-sbmc-navy hover:text-sbmc-teal"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-sbmc-border bg-sbmc-cream-warm px-8 py-4">
        <Button variant="link" href="/services" onClick={onClose}>
          All Services
        </Button>
        <Button href={primaryCta.href} onClick={onClose}>
          {primaryCta.label}
        </Button>
      </div>
    </div>
  );
}
