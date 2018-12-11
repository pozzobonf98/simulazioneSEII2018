const request = require('supertest');
const app    = require('./app');
const funct = require('./function')

test('app module should be defined', () => {
    expect(app).toBeDefined();
  });

test('GET / should return 200', async () => {
    var ciccio = 'ciccio'
    const response = await request(app).get('/:square?string=' + ciccio);
    expect(response.body.result).toBe(36)
    expect(response.status).toBe(200);
});