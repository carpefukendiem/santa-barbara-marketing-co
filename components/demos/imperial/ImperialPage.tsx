import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { imperialMarkup } from './markup';
import './imperial.css';

export function ImperialPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-imperial"
      markup={imperialMarkup}
      stripDayPrefix
    />
  );
}
