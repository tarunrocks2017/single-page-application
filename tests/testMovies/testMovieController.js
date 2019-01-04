/* eslint-env mode, mocha, http, chai */
const Expect = require('chai').expect;

const controller = require('../../src/movies/movieController');

describe('MovieController', () => {
  it('should add item to movie table', async () => {
    const item = {
      moviename: 'homeland2',
      status: 'superhit',
      image_url: 'image.jpg',
      actorname: 'hritik',
      description: 'this is good movie to see',
      releaseYear: 2017,
    };
    const result = await controller.addMovie(item);
    // eslint-disable-next-line no-unused-vars
    const result2 = await controller.addMovie(item);
    const expected = 1;
    Expect(result.affectedRows).equal(expected);
  });

  it('should update item to movie taable', async () => {
    const item = {
      moviename: 'homeland2',
      status: 'flop',
      image_url: 'image.jpg',
      actorname: 'hritik',
      description: 'this is good movie to see',
      releaseYear: 2018,
    };

    const result = await controller.updateMovieById(1, item);
    const expected = 1;
    Expect(result.affectedRows).equal(expected);
  });

  it('should delete the row from movie table', async () => {
    const result = await controller.removeMovieById(2);
    const expected = 1;
    Expect(result.affectedRows).equal(expected);
  });

  it('should return data of table', async () => {
    const result = await controller.getMovies();
    const expected = [{
      movieid: 1,
      moviename: 'homeland2',
      status: 'flop',
      image_url: 'image.jpg',
      actorname: 'hritik',
      releaseYear: 2018,
    }];
    Expect(expected).eql(result);
  });

  it('should return movie by id ', async () => {
    const result = await controller.getMovieById(1);
    const expected = [{
      movieid: 1,
      moviename: 'homeland2',
      status: 'flop',
      image_url: 'image.jpg',
      actorname: 'hritik',
      description: 'this is good movie to see',
      releaseYear: 2018,
    }];
    Expect(expected).eql(result);
  });
});
