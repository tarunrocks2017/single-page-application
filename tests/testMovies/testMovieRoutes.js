 /* eslint-env mode, mocha, http, chai */
const request = require('supertest');

describe('movieRoutes', () => {
  it('should render movie homepage data', (done) => {
    request('http://localhost:8080')
      .get('/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(/koi mil gya/, done);
  });

  it('should render update data', (done) => {
    request('http://localhost:8080')
      .get('/updateMovie')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(/true/, done);
  });

  it('should render delete the item', (done) => {
    request('http://localhost:8080')
      .get('/deleteMovie')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(/true/, done);
  });
});
