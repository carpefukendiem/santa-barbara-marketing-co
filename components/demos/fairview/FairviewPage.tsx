import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { fairviewMarkup } from './markup';
import './fairview.css';

export function FairviewPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-fairview"
      markup={fairviewMarkup}
      stripDayPrefix
    />
  );
}
