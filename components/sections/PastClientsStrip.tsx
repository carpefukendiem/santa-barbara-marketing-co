import Link from 'next/link'
import { pastClients } from '@/data/pastClients'

/**
 * Named past clients only. No logos, metrics, quotes, or ratings.
 * Renders outside homepage A/B copy so both variants share it.
 */
export function PastClientsStrip() {
  return (
    <aside
      aria-label="Businesses we've worked with"
      className="border-y border-cream/15 bg-navy px-6 py-5 lg:px-14"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
        <p className="shrink-0 font-mono text-[13px] tracking-[0.12em] text-cream uppercase">
          Businesses we&apos;ve worked with
        </p>
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-cream/85">
          {pastClients.map((client, index) => (
            <li key={client.name} className="inline-flex items-center gap-3">
              {client.workSlug ? (
                <Link
                  href={`/work/${client.workSlug}`}
                  className="hover:text-cream"
                >
                  {client.name}
                </Link>
              ) : (
                <span>{client.name}</span>
              )}
              {index < pastClients.length - 1 ? (
                <span className="text-cream/30" aria-hidden="true">
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
