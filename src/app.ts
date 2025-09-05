import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';

import fastifyCors from '@fastify/cors';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

import { FastifyTypedInstance } from './types/fastify.js';
import { router } from './routes/index.js';

export async function app(server: FastifyTypedInstance) {
  server.setValidatorCompiler(validatorCompiler);
  server.setSerializerCompiler(serializerCompiler);

  server.register(fastifyCors, {
    origin: '*',
  });

  server.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Trust Issues API',
        version: '1.0.0',
      },
    },
    transform: jsonSchemaTransform,
  });
  server.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  });

  router(server);
}
