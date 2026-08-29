'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { site } from '@/data/site';
import { primaryCta } from '@/data/navigation';
import { telHref } from '@/lib/utils';

const HIDDEN_ON = ['/free-growth-plan', '/contact'];

export function StickyMobileCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-sbmc-border bg-sbmc-cream/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden ${visible ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-200 ease-sbmc`}
    >
      <div className="flex items-center gap-3">
        <Button href={primaryCta.href} className="flex-1">
          {primaryCta.label}
        </Button>
        {site.phone ? (
          <Link
            href={telHref(site.phone)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-sbmc-navy text-sbmc-navy"
            aria-label="Call Santa Barbara Marketing Co."
          >
            <Phone size={18} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
