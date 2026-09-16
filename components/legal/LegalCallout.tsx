import { formatDate } from '@/lib/utils';

export const legalLastUpdated = '2026-08-01';

export function LegalCallout() {
  return (
    <aside className="border-t-2 border-tile py-4 text-sm text-ink">
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
