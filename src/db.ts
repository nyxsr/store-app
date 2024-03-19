import "dotenv/config";
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from "postgres";
import * as schema from '@/db/schema'

const postgresURI: string = process.env.POSTGRES_URI!

export const sql = postgres(postgresURI, {max: 1})

export const db = drizzle(sql, { schema });