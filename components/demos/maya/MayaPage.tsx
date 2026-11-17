import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { mayaMarkup } from './markup';
import './maya.css';

export function MayaPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-maya"
      markup={mayaMarkup}
      stripDayPrefix
    />
  );
}
