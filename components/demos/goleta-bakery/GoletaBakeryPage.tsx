import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { goletaBakeryMarkup } from './markup';
import './goleta-bakery.css';

export function GoletaBakeryPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-goleta-bakery"
      markup={goletaBakeryMarkup}
      stripDayPrefix
    />
  );
}
