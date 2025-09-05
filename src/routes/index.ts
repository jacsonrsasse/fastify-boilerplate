import { FastifyTypedInstance } from '../types/fastify';
import { anyRoutes } from './any.routes';

export function router(server: FastifyTypedInstance) {
  server.register(anyRoutes, { prefix: '/any' });
}
