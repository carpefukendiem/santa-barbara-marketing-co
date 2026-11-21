import type { Metadata } from 'next';
import { listAbEvents, summarizeAbEvents } from '@/lib/ab/store';
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

  const { rows, store } = await listAbEvents();
  const [statsA, statsB] = summarizeAbEvents(rows);
  const a = statsA!;
  const b = statsB!;
  const conversionEvents = AB_EVENTS.filter((event) => event !== 'exposure');

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif', maxWidth: 960 }}>
      <h1>Homepage A/B results</h1>
      <p style={{ color: '#555' }}>
        Store: <strong>{store}</strong> · Total events: {rows.length}
      </p>
      {store === 'memory' ? (
        <p style={{ color: '#8a4b08' }}>
          Memory store only. Apply{' '}
          <code>supabase/migrations/20261121_hp_ab_events.sql</code> and set{' '}
          <code>SUPABASE_URL</code> + <code>SUPABASE_SERVICE_ROLE_KEY</code> for
          durable production counts.
        </p>
      ) : null}
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
              A
            </th>
            <th style={{ textAlign: 'right', borderBottom: '1px solid #ddd', padding: 8 }}>
              B
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 8 }}>exposures</td>
            <td style={{ padding: 8, textAlign: 'right' }}>{a.exposures}</td>
            <td style={{ padding: 8, textAlign: 'right' }}>{b.exposures}</td>
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
              <td style={{ padding: 8, textAlign: 'right' }}>{a.events[event]}</td>
              <td style={{ padding: 8, textAlign: 'right' }}>{b.events[event]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
