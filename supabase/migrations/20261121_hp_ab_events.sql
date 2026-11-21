-- Homepage A/B event store (matches applied schema).
-- Env vars (Vercel, server-only; never NEXT_PUBLIC_):
--   SUPABASE_URL
--   SUPABASE_ANON_KEY
--   AB_RESULTS_SECRET
-- Optional fallback key (not required): SUPABASE_SERVICE_ROLE_KEY

create table if not exists public.hp_ab_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  variant text not null check (variant in ('a', 'b')),
  event text not null,
  path text not null default '/',
  visitor_id text not null,
  session_id text null
);

-- Event allow-list (DB check constraint)
alter table public.hp_ab_events
  drop constraint if exists hp_ab_events_event_check;
alter table public.hp_ab_events
  add constraint hp_ab_events_event_check
  check (
    event in (
      'exposure',
      'start_plan_click',
      'get_started_view',
      'checkout_start',
      'checkout_complete',
      'book_call_click',
      'book_call_view',
      'booking_complete'
    )
  );

-- Length checks
alter table public.hp_ab_events
  drop constraint if exists hp_ab_events_lengths_check;
alter table public.hp_ab_events
  add constraint hp_ab_events_lengths_check
  check (
    char_length(visitor_id) <= 128
    and char_length(path) <= 512
    and (session_id is null or char_length(session_id) <= 256)
  );

create index if not exists hp_ab_events_variant_event_idx
  on public.hp_ab_events (variant, event);

create index if not exists hp_ab_events_created_at_idx
  on public.hp_ab_events (created_at desc);

create index if not exists hp_ab_events_visitor_id_idx
  on public.hp_ab_events (visitor_id);

alter table public.hp_ab_events enable row level security;

revoke all on public.hp_ab_events from anon, authenticated;
grant insert (variant, event, path, visitor_id, session_id)
  on public.hp_ab_events to anon;

drop policy if exists hp_ab_events_anon_insert on public.hp_ab_events;
create policy hp_ab_events_anon_insert
  on public.hp_ab_events
  for insert
  to anon
  with check (true);

-- Aggregated read path for anon (no table SELECT)
create or replace function public.hp_ab_summary()
returns table (
  variant text,
  event text,
  events bigint,
  visitors bigint
)
language sql
security definer
set search_path = public
as $$
  select
    e.variant,
    e.event,
    count(*)::bigint as events,
    count(distinct e.visitor_id)::bigint as visitors
  from public.hp_ab_events e
  group by e.variant, e.event
  order by e.variant, e.event;
$$;

revoke all on function public.hp_ab_summary() from public;
grant execute on function public.hp_ab_summary() to anon;
