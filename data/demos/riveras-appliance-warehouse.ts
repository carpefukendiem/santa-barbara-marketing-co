import type { DemoData } from './types';

export const riverasDemo: DemoData = {
  slug: 'riveras-appliance-warehouse',
  name: "Rivera's Appliance Warehouse",
  crmName: "Rivera's Appliance Warehouse",
  title: "Rivera's Appliance Warehouse · Appliances in Goleta",
  description: "Rivera's Appliance Warehouse at 274 S Fairview Ave, Goleta, CA 93117. Call (805) 967-9607.",
  listingDescription: "Appliance warehouse on Fairview Ave.",
  category: "Appliance store",
  city: 'Goleta',
  address: "274 S Fairview Ave, Goleta, CA 93117",
  phone: "(805) 967-9607",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rivera%27s+Appliance+Warehouse%2C+274+South+Fairview+Avenue%2C+Goleta%2C+CA+93117",
  logo: '/demos/riveras-appliance-warehouse/logo-light.svg',
  logoLight: '/demos/riveras-appliance-warehouse/logo-light.svg',
  logoDark: '/demos/riveras-appliance-warehouse/logo-dark.svg',
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: "Monday",
      hours: "9 AM to 5 PM",
      hoursText: "Mon 9 AM to 5 PM",
    },
    {
      day: 'Tue',
      label: "Tuesday",
      hours: "9 AM to 5 PM",
      hoursText: "Tue 9 AM to 5 PM",
    },
    {
      day: 'Wed',
      label: "Wednesday",
      hours: "9 AM to 5 PM",
      hoursText: "Wed 9 AM to 5 PM",
    },
    {
      day: 'Thu',
      label: "Thursday",
      hours: "9 AM to 5 PM",
      hoursText: "Thu 9 AM to 5 PM",
    },
    {
      day: 'Fri',
      label: "Friday",
      hours: "9 AM to 5 PM",
      hoursText: "Fri 9 AM to 5 PM",
    },
    {
      day: 'Sat',
      label: "Saturday",
      hours: "10 AM to 3 PM",
      hoursText: "Sat 10 AM to 3 PM",
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
