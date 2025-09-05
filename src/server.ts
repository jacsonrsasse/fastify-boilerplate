import fastify from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { app } from './app.js';
import { env } from './env/index.js';

const server = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
    },
  },
}).withTypeProvider<ZodTypeProvider>();

const run = async () => {
  try {
    app(server);
    await server.listen({ port: env.PORT });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

run();
