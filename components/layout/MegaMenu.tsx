'use client';

import { useCallback, useEffect, useId } from 'react';
import Link from 'next/link';
import { IconCircle } from '@/components/ui/IconCircle';
import { Button } from '@/components/ui/Button';
import { megaColumns, primaryCta } from '@/data/navigation';
import { getService } from '@/data/services';
import { serviceLucide } from '@/lib/lucideIcons';

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

  const links = megaColumns.flatMap((column) => column.links);

  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      className="absolute left-1/2 top-full z-50 mt-3 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl bg-white p-6 shadow-xl"
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => {
          const service = getService(link.href.replace('/services/', ''));
          const Icon = serviceLucide(service?.slug ?? '', service?.icon);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex gap-3 rounded-2xl p-3 hover:bg-sand"
                onClick={onClose}
              >
                <IconCircle icon={Icon} />
                <span className="min-w-0">
                  <span className="block font-medium text-navy">{link.label}</span>
                  {service ? (
                    <span className="mt-0.5 line-clamp-2 block text-sm text-stone">
                      {service.cardBlurb}
                    </span>
                  ) : null}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <Button variant="ghost" href="/services" onClick={onClose}>
          All Services
        </Button>
        <Button href={primaryCta.href} onClick={onClose}>
          {primaryCta.label}
        </Button>
      </div>
    </div>
  );
}
