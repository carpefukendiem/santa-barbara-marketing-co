import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { jewelryMartMarkup } from './markup';
import './jewelry-mart.css';

export function JewelryMartPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-jewelry"
      markup={jewelryMartMarkup}
      stripDayPrefix
    />
  );
}
