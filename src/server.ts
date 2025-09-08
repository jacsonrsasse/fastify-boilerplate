import app from './app';
import { env } from './env';

const run = async () => {
  try {
    await app.listen({ port: env.PORT, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

run();

const closeGracefully = async (signal: string) => {
  console.log(`\nReceived signal ${signal}, closing...`);
  await app.close();
  process.exit(0);
};

process.on('SIGTERM', closeGracefully);
process.on('SIGINT', closeGracefully);
