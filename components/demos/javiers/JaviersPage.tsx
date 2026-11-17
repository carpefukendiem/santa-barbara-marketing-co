import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { javiersMarkup } from './markup';
import './javiers.css';

export function JaviersPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-javiers"
      markup={javiersMarkup}
      stripDayPrefix
    />
  );
}
