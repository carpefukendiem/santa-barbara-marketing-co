import type { DemoHourRow } from '@/data/demos/types';

type HoursListProps = {
  hours: DemoHourRow[];
  className?: string;
};

export function HoursList({ hours, className }: HoursListProps) {
  return (
    <ul className={className ?? 'hours'}>
      {hours.map((row) => (
        <li
          key={row.day}
          className={row.closed ? 'closed' : undefined}
          data-day={row.day}
          data-hours={row.hoursText}
        >
          <span>
            {row.label}
            <span className="tag">Today</span>
          </span>
          <span>{row.hours}</span>
        </li>
      ))}
    </ul>
  );
}
