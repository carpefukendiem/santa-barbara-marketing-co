import type { DemoData } from './types';

const slug = 'precision-motorcycle-service' as const;

export const precisionMotorcycleDemo: DemoData = {
  slug,
  name: 'Precision Motorcycle Service',
  crmName: 'Precision Motorcycle Service',
  title: 'Precision Motorcycle Service · Dan’s independent moto shop, Goleta',
  description:
    'Motorcycle service, parts and tires for street and dirt bikes at 6150 Francis Botello Rd #B, Goleta. Call (805) 967-6163.',
  address: '6150 Francis Botello Rd #B, Goleta, CA 93117',
  phone: '(805) 967-6163',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Precision+Motorcycle+Service%2C+6150+Francis+Botello+Road+B%2C+Goleta%2C+CA+93117',
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
      hours: '8:30 AM – 5:30 PM',
      hoursText: 'Tue 8:30 AM – 5:30 PM',
    },
    {
      day: 'Wed',
      label: 'Wednesday',
      hours: '8:30 AM – 5:30 PM',
      hoursText: 'Wed 8:30 AM – 5:30 PM',
    },
    {
      day: 'Thu',
      label: 'Thursday',
      hours: '8:30 AM – 5:30 PM',
      hoursText: 'Thu 8:30 AM – 5:30 PM',
    },
    {
      day: 'Fri',
      label: 'Friday',
      hours: '8:30 AM – 5:30 PM',
      hoursText: 'Fri 8:30 AM – 5:30 PM',
    },
    {
      day: 'Sat',
      label: 'Saturday',
      hours: '8:30 AM – 4 PM',
      hoursText: 'Sat 8:30 AM – 4 PM',
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
