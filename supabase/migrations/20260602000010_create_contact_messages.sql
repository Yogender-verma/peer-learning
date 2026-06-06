-- Migration: create contact_messages table with rate limiting (Issue #721)
-- Public users can INSERT (max 3 per email per 10 min); only service role can SELECT.

create table if not exists public.contact_messages (
  id         uuid        primary key default gen_random_uuid(),
  first_name text        not null check (char_length(first_name) between 1 and 100),
  last_name  text        not null check (char_length(last_name)  between 1 and 100),
  email      text        not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  subject    text        not null check (char_length(subject)    between 1 and 200),
  message    text        not null check (char_length(message)    between 1 and 5000),
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.contact_messages enable row level security;

-- Allow anyone (including unauthenticated visitors) to submit a message
-- FIX: Rate limit enforced via the WITH CHECK expression below
drop policy if exists "Anyone can submit a contact message" on public.contact_messages;
create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  to public
  with check (
    -- FIX: Block if this email has already sent 3+ messages in the last 10 minutes
    (
      select count(*)
      from public.contact_messages c
      where c.email = email
        and c.created_at > now() - interval '10 minutes'
    ) < 3
    AND
    -- FIX: Block exact duplicate messages from the same email in the last 10 minutes
    not exists (
      select 1
      from public.contact_messages c
      where c.email = email
        and c.message = message
        and c.created_at > now() - interval '10 minutes'
    )
  );

-- Only the service-role key (used by the backend) can read messages
drop policy if exists "Service role can view contact messages" on public.contact_messages;
create policy "Service role can view contact messages"
  on public.contact_messages
  for select
  using (auth.role() = 'service_role');

-- FIX: Index on email + created_at to make the rate limit check fast
create index if not exists idx_contact_messages_email_created_at
  on public.contact_messages (email, created_at desc);