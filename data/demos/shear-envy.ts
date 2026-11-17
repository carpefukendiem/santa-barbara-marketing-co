import type { DemoData } from './types';

export const shearEnvyDemo: DemoData = {
  slug: 'shear-envy',
  name: "Shear Envy",
  crmName: "Shear Envy",
  title: "Shear Envy \u00b7 Hair salon on Hollister Ave, Goleta",
  description: "Cuts, color and balayage at Shear Envy, 5370 Hollister Ave #5A, Goleta. Call (805) 636-3140.",
  listingDescription: "Cuts, color and balayage on Hollister Ave in Goleta.",
  category: "Hair salon",
  city: "Goleta",
  address: "5370 Hollister Ave #5A, Goleta, CA 93111",
  phone: "(805) 636-3140",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shear+Envy%2C+5370+Hollister+Avenue+5A%2C+Goleta%2C+CA",
  logo: null,
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: 'Monday',
      hours: 'Closed',
      hoursText: 'Mon Closed',
      closed: true,
    },
    {
      day: 'Tue',
      label: 'Tuesday',
      hours: '10:30 AM – 8 PM',
      hoursText: 'Tue 10:30 AM – 8 PM',
    },
    {
      day: 'Wed',
      label: 'Wednesday',
      hours: '10:30 AM – 6 PM',
      hoursText: 'Wed 10:30 AM – 6 PM',
    },
    {
      day: 'Thu',
      label: 'Thursday',
      hours: '10:30 AM – 6 PM',
      hoursText: 'Thu 10:30 AM – 6 PM',
    },
    {
      day: 'Fri',
      label: 'Friday',
      hours: '10:30 AM – 8 PM',
      hoursText: 'Fri 10:30 AM – 8 PM',
    },
    {
      day: 'Sat',
      label: 'Saturday',
      hours: '11 AM – 2:30 PM',
      hoursText: 'Sat 11 AM – 2:30 PM',
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
