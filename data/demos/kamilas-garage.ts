import type { DemoData } from './types';

export const kamilasDemo: DemoData = {
  slug: 'kamilas-garage',
  name: "Kamila's Garage",
  crmName: "Kamila's Garage",
  title: "Kamila's Garage · Auto repair in Goleta",
  description: "Kamila's Garage at 152 Aero Camino, Unit D, Goleta, CA 93117. Call (219) 501-8319.",
  listingDescription: "Auto repair on Aero Camino in Goleta.",
  category: "Auto repair",
  city: 'Goleta',
  address: "152 Aero Camino, Unit D, Goleta, CA 93117",
  phone: "(219) 501-8319",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kamila%27s+Garage%2C+152+Aero+Camino+Unit+D%2C+Goleta%2C+CA+93117",
  logo: '/demos/kamilas-garage/logo-dark.svg',
  logoLight: '/demos/kamilas-garage/logo-light.svg',
  logoDark: '/demos/kamilas-garage/logo-dark.svg',
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: "Monday",
      hours: "9 AM – 5 PM",
      hoursText: "Mon 9 AM – 5 PM",
    },
    {
      day: 'Tue',
      label: "Tuesday",
      hours: "9 AM – 5 PM",
      hoursText: "Tue 9 AM – 5 PM",
    },
    {
      day: 'Wed',
      label: "Wednesday",
      hours: "9 AM – 5 PM",
      hoursText: "Wed 9 AM – 5 PM",
    },
    {
      day: 'Thu',
      label: "Thursday",
      hours: "9 AM – 5 PM",
      hoursText: "Thu 9 AM – 5 PM",
    },
    {
      day: 'Fri',
      label: "Friday",
      hours: "9 AM – 5 PM",
      hoursText: "Fri 9 AM – 5 PM",
    },
    {
      day: 'Sat',
      label: "Saturday",
      hours: "9 AM – 2 PM",
      hoursText: "Sat 9 AM – 2 PM",
    },
    {
      day: 'Sun',
      label: "Sunday",
      hours: "Call first",
      hoursText: "Sun Call first",
    }
  ],
};
