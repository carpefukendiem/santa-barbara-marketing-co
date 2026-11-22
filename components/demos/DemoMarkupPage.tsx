'use client';

import { useMemo, useRef } from 'react';
import type { DemoData } from '@/data/demos/types';
import { DemoPreviewChrome } from '@/components/demos/DemoPreviewChrome';
import { DemoViewTracker } from '@/components/demos/DemoViewTracker';
import { HoursToday } from '@/components/demos/HoursToday';
import { useDemoReveal } from '@/components/demos/useDemoReveal';
import { telHref } from '@/lib/utils';

export const MAP_TOKEN = '<!--SBMC_MAP_EMBED-->';

type DemoMarkupPageProps = {
  demo: DemoData;
  rootClassName: string;
  /** Mockup body HTML with tokens (__TEL__, __PHONE__, __ADDRESS__, __MAPS_URL__, MAP_TOKEN). */
  markup: string;
  stripDayPrefix?: boolean;
  lang?: string;
};

export function addressKicker(address: string): string {
  return address
    .replace(/,?\s*CA\s*\d{5}(-\d{4})?$/i, '')
    .replace(/,\s*/g, ' · ');
}

function mapEmbedHtml(address: string): string {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const title = `Map of ${address}`;
  return (
    `<div class="map vmap">` +
    `<iframe title="${title.replace(/"/g, '&quot;')}" src="${src}" loading="lazy" ` +
    `referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>` +
    `</div>`
  );
}

export function applyDemoMarkup(markup: string, demo: DemoData): string {
  const tel = telHref(demo.phone);
  let out = markup;
  out = out.replaceAll('__TEL__', tel);
  out = out.replaceAll('__PHONE__', demo.phone);
  out = out.replaceAll('__ADDRESS__', demo.address);
  out = out.replaceAll('__ADDRESS_SHORT__', addressKicker(demo.address));
  out = out.replaceAll('__MAPS_URL__', demo.googleMapsUrl);
  out = out.replaceAll('__NAME__', demo.name);
  if (demo.saturdayHours) {
    out = out.replaceAll('__SATURDAY_HOURS__', demo.saturdayHours);
  }
  if (demo.weekdayHours) {
    out = out.replaceAll('__WEEKDAY_HOURS__', demo.weekdayHours);
  }
  out = out.replace(
    /src="(?!https?:|\/|data:)([^"]+\.(?:jpg|jpeg|png|webp|svg))"/gi,
    `src="/demos/${demo.slug}/$1"`,
  );
  out = out.replaceAll(MAP_TOKEN, mapEmbedHtml(demo.address));
  return out;
}

export function DemoMarkupPage({
  demo,
  rootClassName,
  markup,
  stripDayPrefix = true,
  lang,
}: DemoMarkupPageProps) {
  const html = useMemo(() => applyDemoMarkup(markup, demo), [markup, demo]);
  const rootLang = lang ?? demo.lang;
  const rootRef = useRef<HTMLDivElement>(null);
  useDemoReveal(rootRef);

  return (
    <div
      ref={rootRef}
      className={`sbmc-demo-page ${rootClassName}`}
      {...(rootLang ? { lang: rootLang } : {})}
    >
      <DemoViewTracker slug={demo.slug} />
      <HoursToday hours={demo.hours} stripDayPrefix={stripDayPrefix} />
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <DemoPreviewChrome
        businessName={demo.name}
        crmName={demo.crmName}
        businessSlug={demo.slug}
        locale={demo.chromeLocale ?? 'en'}
      />
    </div>
  );
}
