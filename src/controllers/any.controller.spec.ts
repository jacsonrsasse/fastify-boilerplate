import supertest from 'supertest';
import app from '../app';

describe('anyController', () => {
  afterEach(() => {
    app.close();
  });

  it('should return hello world', async () => {
    const res = await app.inject({
      method: 'GET',
      url: '/any',
    });

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload)).toEqual({ hello: 'world' });
  });
});
