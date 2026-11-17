import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { riverasMarkup } from './markup';
import './riveras.css';

export function RiverasPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-riveras"
      markup={riverasMarkup}
      stripDayPrefix
    />
  );
}
