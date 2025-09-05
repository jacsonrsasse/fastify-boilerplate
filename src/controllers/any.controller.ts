import { FastifyReply, FastifyRequest } from 'fastify';
import * as anyService from '../services/any.service.js';

export const anyGetRouter = (request: FastifyRequest, reply: FastifyReply) => {
  return anyService.anyServiceMethod();
};
