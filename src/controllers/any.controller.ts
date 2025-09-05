import { FastifyReply, FastifyRequest } from 'fastify';
import * as anyService from '../services/any.service';

export const anyGetRouter = (request: FastifyRequest, reply: FastifyReply) => {
  return anyService.anyServiceMethod();
};
