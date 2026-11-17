import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { hollisterMarkup } from './markup';
import './hollister.css';

export function HollisterPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-hollister"
      markup={hollisterMarkup}
      stripDayPrefix
    />
  );
}
