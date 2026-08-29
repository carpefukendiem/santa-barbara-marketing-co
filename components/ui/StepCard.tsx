import { cn } from '@/lib/utils';
import { IconBadge } from '@/components/ui/IconBadge';

export type StepCardProps = {
  title: string;
  body: string;
  icon: React.ReactNode;
  iconBg: string;
  showConnector?: boolean;
  className?: string;
};

export function StepCard({
  title,
  body,
  icon,
  iconBg,
  showConnector = false,
  className,
}: StepCardProps) {
  return (
    <div className={cn('relative flex flex-1 items-start gap-4', className)}>
      <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
        <IconBadge background={iconBg} size={48} glyphClassName="text-white">
          {icon}
        </IconBadge>
        <h3 className="mt-4 font-sans text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-sbmc-navy">
          {title}
        </h3>
        <p className="mt-2 text-body-sm text-sbmc-ink-muted">{body}</p>
      </div>
      {showConnector ? (
        <span
          className="hidden text-2xl text-sbmc-border lg:flex lg:items-center lg:pt-3"
          aria-hidden="true"
        >
          →
        </span>
      ) : null}
    </div>
  );
}
