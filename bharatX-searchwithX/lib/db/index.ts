import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@/lib/db/schema";
import { serverEnv } from "@/env/server";

let db: ReturnType<typeof drizzle> | undefined = undefined;
if (serverEnv.DATABASE_URL) {
  const sql = neon(serverEnv.DATABASE_URL);
  db = drizzle(sql, { schema });
}
export { db };