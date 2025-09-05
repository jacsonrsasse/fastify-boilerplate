import 'dotenv/config';
import z from 'zod';

const envSchema = z.object();

type Env = z.infer<typeof envSchema>;

let env: Env;
try {
  env = envSchema.parse(process.env);
} catch (error) {
  throw new Error('Invalid environment variables');
}

export { env, Env };
