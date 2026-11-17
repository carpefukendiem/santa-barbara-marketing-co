import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { oceanNailsMarkup } from './markup';
import './ocean-nails.css';

export function OceanNailsPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-ocean-nails"
      markup={oceanNailsMarkup}
      stripDayPrefix
    />
  );
}
