import * as anyController from '../controllers/any.controller';
import { FastifyTypedInstance } from '../types/fastify';

export async function anyRoutes(server: FastifyTypedInstance) {
  server.get('/', anyController.anyGetRouter);
}
