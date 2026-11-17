import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { marysMarkup } from './markup';
import './marys.css';

export function MarysPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-marys"
      markup={marysMarkup}
      lang="es"
      stripDayPrefix
    />
  );
}
