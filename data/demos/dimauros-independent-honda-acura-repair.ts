import type { DemoData } from './types';

const slug = 'dimauros-independent-honda-acura-repair' as const;

export const dimaurosDemo: DemoData = {
  slug,
  name: "Dimauro's Independent Honda Acura Repair",
  crmName: "Dimauro's Independent Honda Acura Repair",
  title: "Dimauro's Independent Honda Acura Repair · Goleta",
  description:
    'Honda and Acura only. Oil, timing belts, brakes, electrical and fuel injection at 5798 Dawson Ave, Goleta. Call (805) 964-1032.',
  listingDescription: "Honda and Acura only — oil, timing belts, brakes, electrical and fuel injection in Goleta.",
  category: "Auto repair",
  city: "Goleta",
  address: '5798 Dawson Ave, Goleta, CA 93117',
  phone: '(805) 964-1032',
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dimauro%27s+Independent+Honda+Acura+Repair%2C+5798+Dawson+Avenue%2C+Goleta%2C+CA+93117",
  logo: '/demos/dimauros-independent-honda-acura-repair/logo-dark.v2.svg',
  logoLight: '/demos/dimauros-independent-honda-acura-repair/logo-light.v2.svg',
  logoDark: '/demos/dimauros-independent-honda-acura-repair/logo-dark.v2.svg',
  showWarrantyLine: false,
  warrantyLine:
    'Work that keeps your factory warranty valid, done as the dealer alternative.',
  hours: [
    {
      day: 'Mon',
      label: 'Monday',
      hours: '8 AM – 5 PM',
      hoursText: 'Mon 8 AM – 5 PM',
    },
    {
      day: 'Tue',
      label: 'Tuesday',
      hours: '8 AM – 5 PM',
      hoursText: 'Tue 8 AM – 5 PM',
    },
    {
      day: 'Wed',
      label: 'Wednesday',
      hours: '8 AM – 5 PM',
      hoursText: 'Wed 8 AM – 5 PM',
    },
    {
      day: 'Thu',
      label: 'Thursday',
      hours: '8 AM – 5 PM',
      hoursText: 'Thu 8 AM – 5 PM',
    },
    {
      day: 'Fri',
      label: 'Friday',
      hours: 'Closed',
      hoursText: 'Fri Closed',
      closed: true,
    },
    {
      day: 'Sat',
      label: 'Saturday',
      hours: 'Closed',
      hoursText: 'Sat Closed',
      closed: true,
    },
    {
      day: 'Sun',
      label: 'Sunday',
      hours: 'Closed',
      hoursText: 'Sun Closed',
      closed: true,
    },
  ],
};
