import type { DemoData } from './types';

export const neighborTimsDemo: DemoData = {
  slug: 'neighbor-tims-bbq',
  name: "Neighbor Tim's BBQ",
  crmName: "Neighbor Tim's BBQ",
  title: "Neighbor Tim's BBQ · Saturday BBQ pop-up in Goleta",
  description: "Neighbor Tim's BBQ at 152 Aero Camino, Goleta, CA 93117. Call (805) 845-2230.",
  listingDescription: "Saturday BBQ pop-up on Aero Camino.",
  category: "Barbecue",
  city: 'Goleta',
  address: "152 Aero Camino, Goleta, CA 93117",
  phone: "(805) 845-2230",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Neighbor+Tim%27s+BBQ%2C+152+Aero+Camino%2C+Goleta%2C+CA+93117",
  logo: '/demos/neighbor-tims-bbq/logo-dark.svg',
  logoLight: '/demos/neighbor-tims-bbq/logo-light.svg',
  logoDark: '/demos/neighbor-tims-bbq/logo-dark.svg',
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: "Monday",
      hours: "Closed",
      hoursText: "Mon Closed",
      closed: true,
    },
    {
      day: 'Tue',
      label: "Tuesday",
      hours: "Closed",
      hoursText: "Tue Closed",
      closed: true,
    },
    {
      day: 'Wed',
      label: "Wednesday",
      hours: "Closed",
      hoursText: "Wed Closed",
      closed: true,
    },
    {
      day: 'Thu',
      label: "Thursday",
      hours: "Closed",
      hoursText: "Thu Closed",
      closed: true,
    },
    {
      day: 'Fri',
      label: "Friday",
      hours: "Closed",
      hoursText: "Fri Closed",
      closed: true,
    },
    {
      day: 'Sat',
      label: "Saturday",
      hours: "12 PM to 5 PM (1st and 2nd Saturdays)",
      hoursText: "Sat 12 PM to 5 PM (1st and 2nd Saturdays)",
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
