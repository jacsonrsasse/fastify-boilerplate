import z from 'zod';
import * as anyController from '../controllers/any.controller';
import { FastifyTypedInstance } from '../types/fastify';

export async function anyRoutes(server: FastifyTypedInstance) {
  server.get(
    '/',
    {
      schema: {
        tags: ['Any'],
        description: 'Any description here',
        response: {
          200: z.object({
            hello: z.string(),
          }),
        },
      },
    },
    anyController.anyGetRouter,
  );
}
