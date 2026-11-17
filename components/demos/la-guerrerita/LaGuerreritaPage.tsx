import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { laGuerreritaMarkup } from './markup';
import './guerrerita.css';

export function LaGuerreritaPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-guerrerita"
      markup={laGuerreritaMarkup}
      stripDayPrefix
    />
  );
}
