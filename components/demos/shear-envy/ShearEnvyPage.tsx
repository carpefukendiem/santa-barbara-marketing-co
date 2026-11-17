import type { DemoData } from '@/data/demos/types';
import { DemoMarkupPage } from '@/components/demos/DemoMarkupPage';
import { shearEnvyMarkup } from './markup';
import './shear.css';

export function ShearEnvyPage({ demo }: { demo: DemoData }) {
  return (
    <DemoMarkupPage
      demo={demo}
      rootClassName="d-shear"
      markup={shearEnvyMarkup}
      stripDayPrefix
    />
  );
}
