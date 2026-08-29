import { Button } from '@/components/ui/Button';
import { IconBadge } from '@/components/ui/IconBadge';
import { cn } from '@/lib/utils';

export type ServiceCardProps = {
  title: string;
  href: string;
  blurb: string;
  icon: React.ReactNode;
  iconBg: string;
  variant?: 'hairline' | 'bordered';
  className?: string;
};

export function ServiceCard({
  title,
  href,
  blurb,
  icon,
  iconBg,
  variant = 'hairline',
  className,
}: ServiceCardProps) {
  const body = (
    <>
      <IconBadge background={iconBg} size={56}>
        {icon}
      </IconBadge>
      <h3 className="mt-5 font-sans text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-sbmc-navy">
        {title}
      </h3>
      <p className="mt-3 text-body-sm text-sbmc-ink-muted">{blurb}</p>
      <span className="mt-4 inline-block">
        <Button variant="link" href={href}>
          Learn more
        </Button>
      </span>
    </>
  );

  if (variant === 'bordered') {
    return (
      <article
        className={cn(
          'flex h-full flex-col rounded-[12px] border border-sbmc-border bg-sbmc-white p-7 shadow-card transition-[box-shadow,transform] duration-300 ease-sbmc hover:-translate-y-0.5 hover:shadow-lift',
          className,
        )}
      >
        {body}
      </article>
    );
  }

  return (
    <article className={cn('flex h-full flex-col px-2 py-2 lg:px-5', className)}>
      {body}
    </article>
  );
}
