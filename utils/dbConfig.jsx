import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://Costimize_owner:HShR0O3EzVmQ@ep-solitary-frog-a56k8lci.us-east-2.aws.neon.tech/Costimize?sslmode=require"
);
export const db = drizzle(sql, { schema });