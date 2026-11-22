import { site, siteCityLine } from '@/data/site';
import { cn, formatPhone, telHref } from '@/lib/utils';

type NapBlockProps = {
  className?: string;
  /** Visual tone for footer (cream on navy) vs contact (ink on white). */
  tone?: 'footer' | 'contact';
};

/**
 * Single NAP + email block. Keep formatting identical site-wide.
 * Service-area business: city/region only (no street address).
 * Hours are intentionally omitted.
 */
export function NapBlock({ className, tone = 'contact' }: NapBlockProps) {
  const phone = site.phone;
  const isFooter = tone === 'footer';
  const text = isFooter ? 'text-cream/75' : 'text-ink';
  const link = isFooter
    ? 'text-cream/75 hover:text-cream'
    : 'text-navy hover:text-ocean';
  const nameClass = isFooter
    ? 'font-display text-xl text-cream'
    : 'text-lg font-medium text-navy';

  return (
    <address
      className={cn(
        'not-italic',
        isFooter ? 'mt-4 space-y-1 font-mono text-sm' : 'mt-1 space-y-1 text-lg',
        text,
        className,
      )}
    >
      <p className={cn(nameClass, 'break-words')}>{site.napName}</p>
      <p className="break-words">{siteCityLine()}</p>
      {phone ? (
        <p>
          <a href={telHref(phone)} className={cn('break-words', link)}>
            {formatPhone(phone)}
          </a>
        </p>
      ) : null}
      <p>
        <a href={`mailto:${site.email}`} className={cn('break-words', link)}>
          {site.email}
        </a>
      </p>
    </address>
  );
}
