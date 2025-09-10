import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { env } from '../env';

export const pool = new Pool({
  connectionString: env.DATABASE_URL!,
  ssl: true,
});

export const db = drizzle({ client: pool });

export type DB = typeof db;
