import { FastifyTypedInstance } from '../types/fastify.js';
import { anyRoutes } from './any.routes.js';

export function router(server: FastifyTypedInstance) {
  server.register(anyRoutes, { prefix: '/any' });
}
