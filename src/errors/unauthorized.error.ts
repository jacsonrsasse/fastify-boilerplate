import { AppError } from './app.error';
import { Errors } from './errors';

export class UnauthorizedError extends AppError {
  constructor() {
    super('Unauthorized', 401, Errors.UNAUTHORIZED);
  }
}
