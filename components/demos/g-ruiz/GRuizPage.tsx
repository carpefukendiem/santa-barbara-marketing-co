import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { gRuizMarkup } from './markup';
import './g-ruiz.css';

export function GRuizPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-g-ruiz"
      markup={gRuizMarkup}
      stripDayPrefix
    />
  );
}
