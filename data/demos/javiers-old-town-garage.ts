import type { DemoData } from './types';

export const javiersDemo: DemoData = {
  slug: 'javiers-old-town-garage',
  name: "Javier's Old Town Garage",
  crmName: "Javier's Old Town Garage",
  title: "Javier\u2019s Old Town Garage \u00b7 Family auto repair in Old Town Goleta",
  description: "Family-run auto repair at 5882 Gaviota St, Goleta. Honest diagnosis, fair price, car back fast. Call (805) 869-2215.",
  address: "5882 Gaviota St, Goleta, CA 93117",
  phone: "(805) 869-2215",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Javier%27s+Old+Town+Garage%2C+5882+Gaviota+Street%2C+Goleta%2C+CA+93117",
  logo: null,
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: 'Monday',
      hours: '8:30 AM – 6 PM',
      hoursText: 'Mon 8:30 AM – 6 PM',
    },
    {
      day: 'Tue',
      label: 'Tuesday',
      hours: '8:30 AM – 6 PM',
      hoursText: 'Tue 8:30 AM – 6 PM',
    },
    {
      day: 'Wed',
      label: 'Wednesday',
      hours: '8:30 AM – 6 PM',
      hoursText: 'Wed 8:30 AM – 6 PM',
    },
    {
      day: 'Thu',
      label: 'Thursday',
      hours: '8:30 AM – 6 PM',
      hoursText: 'Thu 8:30 AM – 6 PM',
    },
    {
      day: 'Fri',
      label: 'Friday',
      hours: '8:30 AM – 6 PM',
      hoursText: 'Fri 8:30 AM – 6 PM',
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
    }
  ],
};
