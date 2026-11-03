'use client';

import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Globe,
  Phone,
  Printer,
  Inbox,
  Megaphone,
  MapPin,
  Star,
  Share2,
  Search,
  Waves,
  Building2,
  Trees,
  Anchor,
  type LucideIcon,
} from 'lucide-react';
import { type MegaFeature, type MegaFeatureIcon } from '@/data/navigation';
import { cn } from '@/lib/utils';

const ICONS: Record<MegaFeatureIcon, LucideIcon> = {
  globe: Globe,
  phone: Phone,
  printer: Printer,
  inbox: Inbox,
  ads: Megaphone,
  map: MapPin,
  star: Star,
  share: Share2,
  search: Search,
  waves: Waves,
  building: Building2,
  trees: Trees,
  anchor: Anchor,
};

export function MegaMenu({
  open,
  onClose,
  triggerId,
  panelId,
  eyebrow,
  items,
  footerHref,
  footerLabel,
  columns = 3,
}: {
  open: boolean;
  onClose: () => void;
  triggerId: string;
  panelId: string;
  eyebrow: string;
  items: MegaFeature[];
  footerHref: string;
  footerLabel: string;
  columns?: 2 | 3;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const trigger = document.getElementById(triggerId);
    if (!panel || !trigger) return;

    const place = () => {
      const margin = 16;
      const maxW = Math.min(
        columns === 2 ? 40 * 16 : 56 * 16,
        window.innerWidth - margin * 2,
      );
      panel.style.width = `${maxW}px`;
      const triggerRect = trigger.getBoundingClientRect();
      const overflowsRight = triggerRect.left + maxW > window.innerWidth - margin;
      if (overflowsRight) {
        panel.style.left = 'auto';
        panel.style.right = '0';
        if (triggerRect.right - maxW < margin) {
          panel.style.right = 'auto';
          panel.style.left = `${margin - triggerRect.left}px`;
        }
      } else {
        panel.style.left = '0';
        panel.style.right = 'auto';
      }
    };

    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [open, triggerId, columns]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      className="absolute top-full z-50 max-w-[min(56rem,calc(100vw-2rem))] pt-3"
    >
      <div className="rounded-2xl bg-cream p-6 shadow-[0_24px_80px_rgb(11_31_51_/_0.18)] ring-1 ring-rule sm:p-8">
        <p className="text-eyebrow text-stone">{eyebrow}</p>
        <div
          className={cn(
            'mt-5 grid gap-2 sm:grid-cols-2',
            columns === 3 && 'lg:grid-cols-3',
          )}
        >
          {items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex gap-3 rounded-xl p-3 hover:bg-navy/5"
                onClick={onClose}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-cream">
                  <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-ink">{item.label}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-stone">
                    {item.blurb}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-4 border-t border-rule pt-4">
          <Link
            href={footerHref}
            className="text-sm text-ink underline-offset-4 hover:text-tile hover:underline"
            onClick={onClose}
          >
            {footerLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
