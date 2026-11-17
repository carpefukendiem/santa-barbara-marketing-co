import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { fernandosMarkup } from './markup';
import './fernandos.css';

export function FernandosPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-fernandos"
      markup={fernandosMarkup}
      stripDayPrefix
    />
  );
}
