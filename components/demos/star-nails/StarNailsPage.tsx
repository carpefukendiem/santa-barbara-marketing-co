import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { starNailsMarkup } from './markup';
import './star-nails.css';

export function StarNailsPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-star-nails"
      markup={starNailsMarkup}
      stripDayPrefix
    />
  );
}
