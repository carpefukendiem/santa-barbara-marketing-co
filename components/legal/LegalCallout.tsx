import { formatDate } from '@/lib/utils';

export const legalLastUpdated = '2026-08-01';

export function LegalCallout() {
  return (
    <aside className="rounded-2xl border border-line bg-sand px-5 py-4 text-sm text-navy">
      <p className="text-eyebrow text-ocean">
        Attorney review required
      </p>
      <p className="mt-2">
        This is starter content and has not been reviewed by an attorney. Have
        it reviewed before launch.
      </p>
      <p className="mt-2 text-stone">
        Last updated {formatDate(legalLastUpdated)}.
      </p>
    </aside>
  );
}
