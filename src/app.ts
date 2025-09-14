import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod';

import fastifyCors from '@fastify/cors';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

import fastify from 'fastify';
import { router } from './routes';
import { AppError } from './errors/app.error';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
    },
  },
}).withTypeProvider<ZodTypeProvider>();

app.setErrorHandler((error, request, reply) => {
  request.log.error(error);

  if (error instanceof AppError) {
    return reply
      .status(error.statusCode)
      .send({ error: error.message, code: error.code });
  }

  return reply.status(500).send({ error: 'Internal server error' });
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: '*',
});

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Boilerplate API',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
});
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});

router(app);

export default app;
