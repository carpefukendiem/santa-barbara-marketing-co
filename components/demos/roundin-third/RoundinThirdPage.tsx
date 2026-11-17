import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { roundinThirdMarkup } from './markup';
import './roundin-third.css';

export function RoundinThirdPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-roundin-third"
      markup={roundinThirdMarkup}
      stripDayPrefix
    />
  );
}
