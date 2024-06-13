import { createClient } from "@supabase/supabase-js";

/* Supabase */
const supabase = createClient(
 process.env.SB_URL || "",
 process.env.SB_KEY || ""
);

export default supabase;
