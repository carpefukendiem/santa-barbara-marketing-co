import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { atlasMarkup } from './markup';
import './atlas.css';

export function AtlasPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-atlas"
      markup={atlasMarkup}
      stripDayPrefix
    />
  );
}
