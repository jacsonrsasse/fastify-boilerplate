import supertest from 'supertest';
import app from '../app';

const request = supertest(app.server);

describe('anyController', () => {
  it('should return hello world', async () => {
    const response = await request.get('/any');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ hello: 'world' });
  });
});
