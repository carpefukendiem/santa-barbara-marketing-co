import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { hiensMarkup } from './markup';
import './hiens.css';

export function HiensPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-hiens"
      markup={hiensMarkup}
      stripDayPrefix
    />
  );
}
