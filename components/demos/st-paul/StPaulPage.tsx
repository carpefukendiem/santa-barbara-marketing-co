import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { stPaulMarkup } from './markup';
import './st-paul.css';

export function StPaulPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-st-paul"
      markup={stPaulMarkup}
      stripDayPrefix
    />
  );
}
