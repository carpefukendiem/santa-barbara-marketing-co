/**
 * Prospect demo registry.
 *
 * Adding a demo to /demos (index + /demos/<slug>):
 * 1. Create data/demos/<slug>.ts with DemoData (include listingDescription, category, city).
 * 2. Register it in `demos` below.
 * 3. Wire the page component in app/demos/[slug]/page.tsx.
 *
 * The /demos index reads this registry only — no hand-maintained link list.
 * Only demos registered here render; unfinished prospects (e.g. Nathan Nails,
 * 998 Spa) stay off the index by simply not being added here.
 */
import { ambianceDemo } from './ambiance-nail-care-services';
import { airportDemo } from './airport-motors';
import { atlasDemo } from './atlas-muffler-brakes';
import { coastalDentistryDemo } from './coastal-dentistry';
import { dimaurosDemo } from './dimauros-independent-honda-acura-repair';
import { domingosDemo } from './domingos-cafe';
import { economyDemo } from './economy-muffler-brake';
import { fairviewDemo } from './fairview-mattress-furniture';
import { fairviewMotorsDemo } from './fairview-motors-brakes-alignment';
import { fernandosDemo } from './fernandos-smog-check';
import { gRuizDemo } from './g-ruiz-income-tax';
import { goletaBakeryDemo } from './goleta-bakery';
import { hiensDemo } from './hiens-auto-repair';
import { hollisterDemo } from './hollister-barbershop';
import { imperialDemo } from './the-imperial';
import { javiersDemo } from './javiers-old-town-garage';
import { jewelryMartDemo } from './jewelry-mart';
import { kamilasDemo } from './kamilas-garage';
import { laGuerreritaDemo } from './la-guerrerita';
import { lilysDemo } from './lilys-nail-spa';
import { marysDemo } from './marys-beauty-center';
import { mayaDemo } from './maya-income-tax-co';
import { neighborTimsDemo } from './neighbor-tims-bbq';
import { oceanNailsDemo } from './ocean-nails-spa';
import { precisionMotorcycleDemo } from './precision-motorcycle-service';
import { riverasDemo } from './riveras-appliance-warehouse';
import { roundinThirdDemo } from './roundin-third-sports-bar';
import { shearEnvyDemo } from './shear-envy';
import { starNailsDemo } from './star-nails-spa';
import { stPaulDemo } from './st-paul-cleaners-laundry-tailoring';
import { thePalmsBarberShopDemo } from './the-palms-barber-shop';
import { shanghaiRestaurantDemo } from './shanghai-restaurant';
import { taqueriaElBuenGustoDemo } from './taqueria-el-buen-gusto';
import { goletaRadiatorAutoRepairDemo } from './goleta-radiator-auto-repair';
import { uptownBarberShopDemo } from './uptown-barber-shop';
import { urbanStatementSalonDemo } from './urban-statement-salon';
import { kidsCutsDemo } from './kids-cuts';
import { stapeCyclesDemo } from './stape-cycles';
import { barberIncDemo } from './barber-inc';
import { kimNailsSpaDemo } from './kim-nails-spa';
import { mesaBarberShopDemo } from './mesa-barber-shop';
import { deLaVinaBarbersDemo } from './de-la-vina-barbers';
import { caseysGarageDiscountSmogDemo } from './caseys-garage-discount-smog';
import { saigonNoodleHouseDemo } from './saigon-noodle-house';
import { sushiTymeDemo } from './sushi-tyme';
import { tacosPipeyeDemo } from './tacos-pipeye';
import { laArcadaBarberShopDemo } from './la-arcada-barber-shop';
import { alphonsosTransmissionDemo } from './alphonsos-transmission';
import { westcoastAutomotiveDemo } from './westcoast-automotive';
import { simplyAutomotiveDemo } from './simply-automotive';
import { gonzosSmallEngineRepairDemo } from './gonzos-small-engine-repair';
import { filixTiresDemo } from './filix-tires';
import { anacapaAutoBodyPaintDemo } from './anacapa-auto-body-paint';
import { rainbowNailsDemo } from './rainbow-nails';
import { amigosHaircuttingDemo } from './amigos-haircutting';
import { sheepskinTradingPostDemo } from './sheepskin-trading-post';
import { bobsCanvasShopDemo } from './bobs-canvas-shop';
import { milpasTaqueriaDemo } from './milpas-taqueria';
import { todayNailsDemo } from './today-nails';
import type { DemoData, DemoSlug } from './types';

export type { DemoChromeLocale, DemoData, DemoHourRow, DemoReview, DemoSlug } from './types';

const demos = {
  [dimaurosDemo.slug]: dimaurosDemo,
  [coastalDentistryDemo.slug]: coastalDentistryDemo,
  [precisionMotorcycleDemo.slug]: precisionMotorcycleDemo,
  [javiersDemo.slug]: javiersDemo,
  [shearEnvyDemo.slug]: shearEnvyDemo,
  [laGuerreritaDemo.slug]: laGuerreritaDemo,
  [fairviewDemo.slug]: fairviewDemo,
  [domingosDemo.slug]: domingosDemo,
  [goletaBakeryDemo.slug]: goletaBakeryDemo,
  [jewelryMartDemo.slug]: jewelryMartDemo,
  [marysDemo.slug]: marysDemo,
  [mayaDemo.slug]: mayaDemo,
  [oceanNailsDemo.slug]: oceanNailsDemo,
  [starNailsDemo.slug]: starNailsDemo,
  [ambianceDemo.slug]: ambianceDemo,
  [fernandosDemo.slug]: fernandosDemo,
  [airportDemo.slug]: airportDemo,
  [atlasDemo.slug]: atlasDemo,
  [fairviewMotorsDemo.slug]: fairviewMotorsDemo,
  [economyDemo.slug]: economyDemo,
  [kamilasDemo.slug]: kamilasDemo,
  [hiensDemo.slug]: hiensDemo,
  [stPaulDemo.slug]: stPaulDemo,
  [gRuizDemo.slug]: gRuizDemo,
  [riverasDemo.slug]: riverasDemo,
  [imperialDemo.slug]: imperialDemo,
  [hollisterDemo.slug]: hollisterDemo,
  [lilysDemo.slug]: lilysDemo,
  [neighborTimsDemo.slug]: neighborTimsDemo,
  [roundinThirdDemo.slug]: roundinThirdDemo,
  [thePalmsBarberShopDemo.slug]: thePalmsBarberShopDemo,
  [shanghaiRestaurantDemo.slug]: shanghaiRestaurantDemo,
  [taqueriaElBuenGustoDemo.slug]: taqueriaElBuenGustoDemo,
  [goletaRadiatorAutoRepairDemo.slug]: goletaRadiatorAutoRepairDemo,
  [uptownBarberShopDemo.slug]: uptownBarberShopDemo,
  [urbanStatementSalonDemo.slug]: urbanStatementSalonDemo,
  [kidsCutsDemo.slug]: kidsCutsDemo,
  [stapeCyclesDemo.slug]: stapeCyclesDemo,
  [barberIncDemo.slug]: barberIncDemo,
  [kimNailsSpaDemo.slug]: kimNailsSpaDemo,
  [mesaBarberShopDemo.slug]: mesaBarberShopDemo,
  [deLaVinaBarbersDemo.slug]: deLaVinaBarbersDemo,
  [caseysGarageDiscountSmogDemo.slug]: caseysGarageDiscountSmogDemo,
  [saigonNoodleHouseDemo.slug]: saigonNoodleHouseDemo,
  [sushiTymeDemo.slug]: sushiTymeDemo,
  [tacosPipeyeDemo.slug]: tacosPipeyeDemo,
  [laArcadaBarberShopDemo.slug]: laArcadaBarberShopDemo,
  [alphonsosTransmissionDemo.slug]: alphonsosTransmissionDemo,
  [westcoastAutomotiveDemo.slug]: westcoastAutomotiveDemo,
  [simplyAutomotiveDemo.slug]: simplyAutomotiveDemo,
  [gonzosSmallEngineRepairDemo.slug]: gonzosSmallEngineRepairDemo,
  [filixTiresDemo.slug]: filixTiresDemo,
  [anacapaAutoBodyPaintDemo.slug]: anacapaAutoBodyPaintDemo,
  [rainbowNailsDemo.slug]: rainbowNailsDemo,
  [amigosHaircuttingDemo.slug]: amigosHaircuttingDemo,
  [sheepskinTradingPostDemo.slug]: sheepskinTradingPostDemo,
  [bobsCanvasShopDemo.slug]: bobsCanvasShopDemo,
  [milpasTaqueriaDemo.slug]: milpasTaqueriaDemo,
  [todayNailsDemo.slug]: todayNailsDemo,
} as const satisfies Record<string, DemoData>;

export function getDemo(slug: string): DemoData | undefined {
  if (slug in demos) {
    return demos[slug as DemoSlug];
  }
  return undefined;
}

export function getAllDemoSlugs(): DemoSlug[] {
  return Object.keys(demos) as DemoSlug[];
}

/** All live demos for the /demos index, sorted by category then name. */
export function getListedDemos(): DemoData[] {
  return (Object.values(demos) as DemoData[]).slice().sort((a, b) => {
    const byCategory = a.category.localeCompare(b.category, 'en');
    if (byCategory !== 0) return byCategory;
    return a.name.localeCompare(b.name, 'en');
  });
}

export { demos };
