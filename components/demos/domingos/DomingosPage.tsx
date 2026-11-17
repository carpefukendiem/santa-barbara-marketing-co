import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { domingosMarkup } from './markup';
import './domingos.css';

export function DomingosPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-domingos"
      markup={domingosMarkup}
      stripDayPrefix
    />
  );
}
