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
    const item = {
      actorname: 'tarun',
      movieid: 1,
      activeYear: '2018-2019',
      image_url: 'image.jpg',
      totalmovies: 123,
    };
    request('http://localhost:8080')
      .get('/actors')
      .set('Accept', 'application/json')
      .set('id', 1)
      .set('actorObject', item)
      .expect('Content-Type', /json/)
      .expect(/Hritik/, done);
  });

  it('should render delete the item', (done) => {
    request('http://localhost:8080')
      .get('/actors')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(/homeland2/, done);
  });
});
