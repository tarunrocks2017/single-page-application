/* eslint-env mode, mocha, http, chai */
const request = require('supertest');

describe('actorRoutes', () => {
  it('should render actor homepage data', (done) => {
    request('http://localhost:8080')
      .get('/actors')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(/koi mil gya/, done);
  });

  it('should render update data', (done) => {
    request('http://localhost:8080')
      .get('/actors')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(/true/, done);
  });

  it('should render delete the item', (done) => {
    request('http://localhost:8080')
      .get('/actors')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(/false/, done);
  });
});
