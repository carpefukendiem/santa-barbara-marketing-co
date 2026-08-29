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
  const stacked = variant === 'bordered';

  const body = (
    <>
      <div
        className={cn(
          stacked
            ? 'flex flex-col'
            : 'flex items-start gap-4 min-[480px]:flex-col min-[480px]:gap-0',
        )}
      >
        <IconBadge background={iconBg} size={72} className="shrink-0">
          {icon}
        </IconBadge>
        <div className={stacked ? 'mt-5' : 'min-[480px]:mt-5'}>
          <h3 className="font-sans text-[0.78rem] font-bold uppercase tracking-[0.1em] text-sbmc-navy">
            {title}
          </h3>
          <p className="mt-3 text-body-sm text-sbmc-ink-muted">{blurb}</p>
          <span className="mt-4 inline-block">
            <Button variant="link" href={href}>
              Learn more
            </Button>
          </span>
        </div>
      </div>
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
    <article className={cn('flex h-full flex-col px-1 py-1 lg:px-6', className)}>
      {body}
    </article>
  );
}
