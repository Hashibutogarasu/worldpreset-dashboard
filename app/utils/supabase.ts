import { createClient } from "@supabase/supabase-js";
import { Database } from "firebase-admin/lib/database/database";
require("dotenv").config();

export const supabase = createClient<Database>(
	process.env.NEXT_PUBLIC_SUPABASE_URL as string,
	process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string,
);