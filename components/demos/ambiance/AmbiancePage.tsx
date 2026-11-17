import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { ambianceMarkup } from './markup';
import './ambiance.css';

export function AmbiancePage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-ambiance"
      markup={ambianceMarkup}
      stripDayPrefix
    />
  );
}
