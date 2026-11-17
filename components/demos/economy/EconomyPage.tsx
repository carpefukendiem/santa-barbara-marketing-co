import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { economyMarkup } from './markup';
import './economy.css';

export function EconomyPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-economy"
      markup={economyMarkup}
      stripDayPrefix
    />
  );
}
