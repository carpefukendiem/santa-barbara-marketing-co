import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { noSiteMarkups, noSiteThemes } from './markups';
import './nosite.css';

/** Shared template for the Nov 2026 no-site outreach batch. */
export function NoSitePage({ demo }: { demo: DemoData }) {
  const markup = noSiteMarkups[demo.slug] ?? '';
  const theme = noSiteThemes[demo.slug] ?? 'barber';
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName={`ns t-${theme}`}
      markup={markup}
      stripDayPrefix
    />
  );
}
