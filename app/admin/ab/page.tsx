import type { Metadata } from 'next';
import { fetchAbSummary, summarizeAbSummary } from '@/lib/ab/store';
import { AB_EVENTS } from '@/lib/ab/constants';

export const metadata: Metadata = {
  title: 'Homepage A/B results',
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams: Promise<{ secret?: string }>;
};

function pct(rate: number | null): string {
  if (rate == null) return '-';
  return `${(rate * 100).toFixed(1)}%`;
}

export default async function AdminAbPage({ searchParams }: PageProps) {
  const { secret } = await searchParams;
  const expected = process.env.AB_RESULTS_SECRET;

  if (!expected) {
    return (
      <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
        <h1>Homepage A/B results</h1>
        <p>Set AB_RESULTS_SECRET in the environment to unlock this page.</p>
      </main>
    );
  }

  if (secret !== expected) {
    return (
      <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
        <h1>Homepage A/B results</h1>
        <p>
          Pass <code>?secret=…</code> matching AB_RESULTS_SECRET, or call{' '}
          <code>GET /api/ab-results</code> with header{' '}
          <code>x-ab-results-secret</code>.
        </p>
      </main>
    );
  }

  const { rows, store, via } = await fetchAbSummary();
  const [statsA, statsB] = summarizeAbSummary(rows);
  const a = statsA!;
  const b = statsB!;
  const conversionEvents = AB_EVENTS.filter((event) => event !== 'exposure');
  const totalEvents =
    Object.values(a.events).reduce((sum, n) => sum + n, 0) +
    Object.values(b.events).reduce((sum, n) => sum + n, 0);

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif', maxWidth: 960 }}>
      <h1>Homepage A/B results</h1>
      <p style={{ color: '#555' }}>
        Store: <strong>{store}</strong>
        {via ? (
          <>
            {' '}
            ({via})
          </>
        ) : null}{' '}
        · Total events: {totalEvents}
      </p>
      {store === 'memory' ? (
        <p style={{ color: '#8a4b08' }}>
          Memory store only. Set <code>SUPABASE_URL</code> +{' '}
          <code>SUPABASE_ANON_KEY</code> (server-only) for durable counts via{' '}
          <code>hp_ab_summary()</code>.
        </p>
      ) : (
        <p style={{ color: '#555' }}>
          Rates use unique exposure visitors as the denominator.
        </p>
      )}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: 16,
          fontSize: 14,
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>
              Metric
            </th>
            <th style={{ textAlign: 'right', borderBottom: '1px solid #ddd', padding: 8 }}>
              A events / visitors
            </th>
            <th style={{ textAlign: 'right', borderBottom: '1px solid #ddd', padding: 8 }}>
              B events / visitors
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 8 }}>exposures</td>
            <td style={{ padding: 8, textAlign: 'right' }}>
              {a.events.exposure} / {a.visitors.exposure}
            </td>
            <td style={{ padding: 8, textAlign: 'right' }}>
              {b.events.exposure} / {b.visitors.exposure}
            </td>
          </tr>
          {conversionEvents.map((event) => (
            <tr key={event}>
              <td style={{ padding: 8 }}>
                {event}
                <span style={{ color: '#888' }}>
                  {' '}
                  ({pct(a.rates[event])} / {pct(b.rates[event])})
                </span>
              </td>
              <td style={{ padding: 8, textAlign: 'right' }}>
                {a.events[event]} / {a.visitors[event]}
              </td>
              <td style={{ padding: 8, textAlign: 'right' }}>
                {b.events[event]} / {b.visitors[event]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
