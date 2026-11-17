import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { kamilasMarkup } from './markup';
import './kamilas.css';

export function KamilasPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-kamilas"
      markup={kamilasMarkup}
      stripDayPrefix
    />
  );
}
