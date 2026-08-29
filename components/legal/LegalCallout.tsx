import { formatDate } from '@/lib/utils';

export const legalLastUpdated = '2026-08-01';

export function LegalCallout() {
  return (
    <aside className="rounded-[12px] border border-sbmc-sand bg-sbmc-peach-light/50 px-5 py-4 text-body-sm text-sbmc-navy">
      <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.12em] text-sbmc-orange">
        Attorney review required
      </p>
      <p className="mt-2">
        This is starter content and has not been reviewed by an attorney. Have
        it reviewed before launch.
      </p>
      <p className="mt-2 text-sbmc-ink-muted">
        Last updated {formatDate(legalLastUpdated)}.
      </p>
    </aside>
  );
}
