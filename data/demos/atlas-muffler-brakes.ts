import type { DemoData } from './types';

export const atlasDemo: DemoData = {
  slug: 'atlas-muffler-brakes',
  name: "Atlas Muffler & Brakes",
  crmName: "Atlas Muffler & Brakes",
  title: "Atlas Muffler & Brakes · Muffler and brakes in Goleta",
  description: "Atlas Muffler & Brakes at 650 S Fairview Ave, Goleta, CA 93117. Call (805) 845-9700.",
  listingDescription: "Muffler and brake shop on Fairview Ave.",
  category: "Muffler & brakes",
  city: 'Goleta',
  address: "650 S Fairview Ave, Goleta, CA 93117",
  phone: "(805) 845-9700",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Atlas+Muffler+%26+Brakes%2C+650+South+Fairview+Avenue%2C+Goleta%2C+CA+93117",
  logo: '/demos/atlas-muffler-brakes/logo-light.svg',
  logoLight: '/demos/atlas-muffler-brakes/logo-light.svg',
  logoDark: '/demos/atlas-muffler-brakes/logo-dark.svg',
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: "Monday",
      hours: "8:00 – 5:00",
      hoursText: "Mon 8:00 – 5:00",
    },
    {
      day: 'Tue',
      label: "Tuesday",
      hours: "8:00 – 5:00",
      hoursText: "Tue 8:00 – 5:00",
    },
    {
      day: 'Wed',
      label: "Wednesday",
      hours: "8:00 – 5:00",
      hoursText: "Wed 8:00 – 5:00",
    },
    {
      day: 'Thu',
      label: "Thursday",
      hours: "8:00 – 5:00",
      hoursText: "Thu 8:00 – 5:00",
    },
    {
      day: 'Fri',
      label: "Friday",
      hours: "8:00 – 5:00",
      hoursText: "Fri 8:00 – 5:00",
    },
    {
      day: 'Sat',
      label: "Saturday",
      hours: "Closed",
      hoursText: "Sat Closed",
      closed: true,
    },
    {
      day: 'Sun',
      label: "Sunday",
      hours: "Closed",
      hoursText: "Sun Closed",
      closed: true,
    }
  ],
};
