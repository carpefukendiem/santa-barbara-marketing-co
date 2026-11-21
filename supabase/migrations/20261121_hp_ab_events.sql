-- Homepage A/B event store. Apply manually before merge / production use.
-- Do not run against production from this PR alone.
--
-- Required env vars (set in Vercel, not by the agent):
--   SUPABASE_URL
--   SUPABASE_SERVICE_ROLE_KEY
--   AB_RESULTS_SECRET

create table if not exists public.hp_ab_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  variant text not null check (variant in ('a', 'b')),
  event text not null,
  path text not null default '/',
  visitor_id text not null,
  session_id text null
);

create index if not exists hp_ab_events_variant_event_idx
  on public.hp_ab_events (variant, event);

create index if not exists hp_ab_events_created_at_idx
  on public.hp_ab_events (created_at desc);

create index if not exists hp_ab_events_visitor_id_idx
  on public.hp_ab_events (visitor_id);

alter table public.hp_ab_events enable row level security;

-- No anon policies: writes go through the service role from /api/ab-event only.
