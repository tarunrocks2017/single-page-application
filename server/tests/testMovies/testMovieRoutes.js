/* eslint-env mode, mocha, http, chai */
const request = require('supertest');

describe('movieRoutes', () => {
  it('should render movie homepage data', (done) => {
    request('http://localhost:8080')
      .get('/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(/homeland2/, done);
  });

  it('should render update data', (done) => {
    const item = {
      moviename: 'koi mil gya',
      status: 'blockbuster',
      image_url: 'image/jpg',
      actorname: 'tarun',
      description: 'good',
      releaseYear: 2008,
    };
    request('http://localhost:8080')
      .get('/updateMovie')
      .set('Accept', 'application/json')
      .set('id', 1)
      .set('movieObject', item)
      .expect('Content-Type', /json/)
      .expect(/true/, done);
  });

  it('should render delete the item', (done) => {
    request('http://localhost:8080')
      .get('/deleteMovie')
      .set('Accept', 'application/json')
      .set('id', 1)
      .expect('Content-Type', /json/)
      .expect(/true/, done);
  });
});
