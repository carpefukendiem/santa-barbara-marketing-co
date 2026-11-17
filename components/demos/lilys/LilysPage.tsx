import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { lilysMarkup } from './markup';
import './lilys.css';

export function LilysPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-lilys"
      markup={lilysMarkup}
      stripDayPrefix
    />
  );
}
