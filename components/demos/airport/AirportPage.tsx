import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { airportMarkup } from './markup';
import './airport.css';

export function AirportPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-airport"
      markup={airportMarkup}
      stripDayPrefix
    />
  );
}
