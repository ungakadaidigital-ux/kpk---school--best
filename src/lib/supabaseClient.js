// Central Supabase client used by the whole app.
// Reads keys from Vite environment variables (see .env.example).
// Never hardcode real project keys here — this file is safe to commit
// because it only reads from import.meta.env, it does not contain secrets.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Fails loudly in dev rather than silently returning empty data everywhere.
  // eslint-disable-next-line no-console
  console.warn(
    "[supabaseClient] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set. " +
      "Copy .env.example to .env and add your Supabase project values."
  );
}

export const supabase = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "");
