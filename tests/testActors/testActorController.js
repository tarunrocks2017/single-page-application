/* eslint-env mode, mocha, http, chai */
const Expect = require('chai').expect;

const controller = require('../../src/actors/actorController');


describe('actorData', () => {
  it('should add actor into actor table', async () => {
    const item = {
      actorname: 'kumar',
      movieid: 1,
      activeYear: '2016-2018',
      image_url: 'kumar.jpg',
      totalmovies: 233,
    };
    try {
      const result = await controller.addActor(item);
      // eslint-disable-next-line no-unused-vars
      const result2 = await controller.addActor(item);
      const expected = 1;
      Expect(result.affectedRows).equal(expected);
    } catch (error) {
      throw error;
    }
  });

  it('should update actor row', async () => {
    const item = {
      actorname: 'vishnu',
      moviename: 'krish3',
      movieid: 1,
      activeYear: '2018-2019',
      image_url: 'vishnu.jpg',
      totalmovies: 123,
    };
    try {
      const result = await controller.updateActorById(1, item);
      const expected = 1;
      Expect(result.affectedRows).equal(expected);
    } catch (error) {
      throw error;
    }
  });

  it('should delete row from actor table', async () => {
    try {
      const result = await controller.removeActorById(2);
      const expected = 1;
      Expect(result.affectedRows).equal(expected);
    } catch (error) {
      throw error;
    }
  });

  it('should give all actors from actor table', async () => {
    try {
      const result = await controller.getActors();
      const expected = [{
        moviename: 'homeland2',
        movieid: 1,
        actorname: 'vishnu',
        activeYear: '2018-2019',
        image_url: 'vishnu.jpg',
        actorid: 1,
        totalmovies: 123,
      }];
      Expect(result).eql(expected);
    } catch (error) {
      throw error;
    }
  });
  it('should give actor by Id ', async () => {
    const result = await controller.getActorById(1);
    const expected = [{
      option: [
        {
          movieid: 1,
          moviename: 'homeland2',
        }],
      movieid: 1,
      actorid: 1,
      actorname: 'vishnu',
      activeYear: '2018-2019',
      image_url: 'vishnu.jpg',
      totalmovies: 123,
    }];
    Expect(result).eql(expected);
  });
});
