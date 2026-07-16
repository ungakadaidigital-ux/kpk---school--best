# KPK National Matriculation School — Website (React + Vite + Supabase)

Production-ready rebuild of the approved static site. Visual design is
unchanged — this phase converts it into a maintainable React app and
wires the Admission Inquiry form (and Contact form) to a real backend,
plus a small Admin Dashboard to view inquiries.

Reference: `KPK_Master_Architecture_v1.0.docx` (Parts C & D).

## Quick Start

```bash
npm install
cp .env.example .env      # then fill in your Supabase project values
npm run dev                # http://localhost:5173
```

To build for production:

```bash
npm run build              # outputs to /dist
npm run preview            # preview the production build locally
```

## Supabase Setup

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** and run `db/schema.sql` — creates
   `admission_inquiries`, `contact_messages`, `news_circulars`, and
   `gallery_media`, with Row-Level Security policies already applied.
3. Open **Project Settings → API** and copy the Project URL and
   `anon public` key into your `.env` file (see `.env.example`).
4. Create an admin login under **Authentication → Users** (email +
   password). There is no public sign-up screen anywhere in the app —
   admin accounts are created manually by whoever manages the
   Supabase project. Sign in at `/admin/login`.
5. (Optional, for the Gallery page) create a public Storage bucket
   named `gallery` and insert rows into `gallery_media` with each
   image's public URL.

## Folder Structure

```
src/
  components/
    layout/       Header, Footer, PublicLayout (shared page shell)
    ui/            PageHero, Card, PhotoBlock, StatRow, Ledger, ProtectedRoute
    forms/         AdmissionForm, ContactForm (Supabase-connected)
  pages/           One file per public route (Home, About, Academics, …)
    admin/         AdminLogin, AdminDashboard, AdminLayout
  lib/
    supabaseClient.js   Single Supabase client instance
    AuthContext.jsx     Auth session provider for admin routes
  data/
    site.js        Nav links + contact details (env-driven)
  styles/
    style.css      The approved design system — unchanged from the
                    static version. Do not edit without sign-off.
    admin.css       Additive admin-only styles (reuses the same
                    design tokens; does not touch style.css)
db/
  schema.sql        Supabase tables + RLS policies
```

## Routing

| Path | Page | Access |
|---|---|---|
| `/` | Home | Public |
| `/about` | About | Public |
| `/academics` | Academics | Public |
| `/facilities` | Facilities | Public |
| `/admissions` | Admissions + inquiry form | Public |
| `/gallery` | Gallery | Public |
| `/news` | News & Circulars | Public |
| `/contact` | Contact + message form | Public |
| `/privacy` | Privacy Policy & Terms | Public |
| `/admin/login` | Admin sign-in | Public (form) |
| `/admin/dashboard` | Inquiry management | Authenticated only |

Deploying to most static hosts (Vercel, Netlify, Railway static
sites) requires a catch-all rewrite to `index.html` so client-side
routes like `/admissions` don't 404 on refresh — check your host's
SPA/rewrite setting.

## Architectural Notes

- **No separate Node/Express API in this phase.** The Master
  Architecture document lists Node/Express as part of the long-term
  stack; for Phase 1's scope (public site + inquiry form + admin
  view), the React app talks to Supabase directly using the `anon`
  key, and Row-Level Security in `db/schema.sql` is what keeps that
  safe. Add an Express layer later if you need logic that can't live
  in Postgres/RLS (e.g. calling the MSG91 API server-side).
- **MSG91 WhatsApp/SMS alerts are not wired yet.** The recommended
  approach is a Supabase Database Webhook or Edge Function that fires
  on `insert` into `admission_inquiries` and calls MSG91 from the
  server side — never call MSG91 directly from the browser, as that
  would expose your MSG91 API key.
- **Gallery and News pages read live from Supabase** and automatically
  fall back to the original placeholder tiles/cards if those tables
  are empty or unreachable, so the site never looks broken before
  content is added.
- **Design system is untouched.** `styles/style.css` is a byte-for-byte
  copy of the approved static site's CSS. Every component maps to the
  exact same class names used in the static HTML, so no visual
  changes were introduced during this conversion.

## Content Still Needed Before Launch

See the content checklist in the Master Architecture document (Part
E) — real campus photography, faculty list, fee structure decision,
and finalised Privacy Policy / Terms text are still placeholders in
this build.
