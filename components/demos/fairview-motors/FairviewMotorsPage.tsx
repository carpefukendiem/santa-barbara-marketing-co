import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { fairviewMotorsMarkup } from './markup';
import './fairview-motors.css';

export function FairviewMotorsPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-fairview-motors"
      markup={fairviewMotorsMarkup}
      stripDayPrefix
    />
  );
}
