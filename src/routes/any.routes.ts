import * as anyController from '../controllers/any.controller.js';
import { FastifyTypedInstance } from '../types/fastify.js';

export async function anyRoutes(server: FastifyTypedInstance) {
  server.get('/', anyController.anyGetRouter);
}
