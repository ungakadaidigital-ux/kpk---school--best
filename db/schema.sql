-- ============================================================
-- KPK National Matriculation School — Supabase Schema (Phase 1)
-- Run this in Supabase Dashboard → SQL Editor.
-- Matches the data model in the Master Architecture document,
-- Part D, Section 9.
-- ============================================================

-- ---------- admission_inquiries ----------
-- Written to by the public Admission Inquiry form (anon insert).
-- Read/updated only by authenticated admin users.
create table if not exists admission_inquiries (
  id uuid primary key default gen_random_uuid(),
  parent_name text not null,
  student_name text not null,
  phone text not null,
  email text,
  class_applying text not null,
  academic_year text,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'enrolled', 'closed')),
  created_at timestamptz not null default now()
);

alter table admission_inquiries enable row level security;

-- Anyone (including the public anon key) can submit an inquiry.
create policy "Public can submit admission inquiries"
  on admission_inquiries for insert
  to anon
  with check (true);

-- Only authenticated (admin) users can read inquiries.
create policy "Authenticated users can read admission inquiries"
  on admission_inquiries for select
  to authenticated
  using (true);

-- Only authenticated (admin) users can update status.
create policy "Authenticated users can update admission inquiries"
  on admission_inquiries for update
  to authenticated
  using (true)
  with check (true);


-- ---------- contact_messages ----------
-- Written to by the general Contact page form.
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

create policy "Public can submit contact messages"
  on contact_messages for insert
  to anon
  with check (true);

create policy "Authenticated users can read contact messages"
  on contact_messages for select
  to authenticated
  using (true);


-- ---------- news_circulars ----------
-- Powers the homepage "Latest News" section and the News page.
-- Publicly readable (no login needed to view news); only authenticated
-- admins can create/edit.
create table if not exists news_circulars (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text,
  category text default 'general',
  is_active boolean not null default true,
  published_at timestamptz not null default now()
);

alter table news_circulars enable row level security;

create policy "Public can read active news"
  on news_circulars for select
  to anon, authenticated
  using (is_active = true);

create policy "Authenticated users can manage news"
  on news_circulars for all
  to authenticated
  using (true)
  with check (true);


-- ---------- gallery_media ----------
-- Powers the Gallery page. Pair with a Supabase Storage bucket
-- (e.g. "gallery") for the actual image files; this table stores
-- the public URL + caption/category metadata.
create table if not exists gallery_media (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  caption text,
  category text default 'general',
  uploaded_at timestamptz not null default now()
);

alter table gallery_media enable row level security;

create policy "Public can read gallery media"
  on gallery_media for select
  to anon, authenticated
  using (true);

create policy "Authenticated users can manage gallery media"
  on gallery_media for all
  to authenticated
  using (true)
  with check (true);


-- ============================================================
-- Admin users: handled entirely through Supabase Auth
-- (Authentication → Users in the dashboard). No public sign-up
-- is exposed anywhere in the app — create admin accounts manually.
-- A `role` field was intentionally left out of a separate table for
-- Phase 1 (single admin role); add a `profiles` table with a `role`
-- column in Phase 2 when parent/teacher logins are introduced, per
-- the Master Architecture roadmap.
-- ============================================================
