const con = require('../../migrationScripts/sqlScripts/connectDB');

const SELECT_FROM_ACTORS = `select m.moviename , m.movieid , actorid, ac.actorname , activeYear , ac.image_url
, totalmovies from actors ac inner join movies m on m.movieid = ac.movieid`;

const INSERT_INTO_ACTOR = 'insert into actors(actorname,movieid,activeYear,image_url,totalmovies) values ( ?,?,?,?,?)';

const UPDATE_INTO_ACTOR = 'update actors set actorname=?,movieid=?,activeYear=?,image_url=?,totalmovies=? where actorid= ?';

const GET_NEW_ACTOR = `select m.moviename , m.movieid , actorid, ac.actorname , activeYear , ac.image_url
, totalmovies from actors ac inner join movies m on m.movieid = ac.movieid where ac.actorname = ?`;

async function getActors() {
  try {
    const connection = await con.getConnection();
    const result = await connection.query(SELECT_FROM_ACTORS);
    await connection.end();
    return result;
  } catch (err) {
    return err;
  }
}
async function getMovieOption() {
  try {
    const connection = await con.getConnection();
    const result = await connection.query('select moviename, movieid from movies');
    return result;
  } catch (error) {
    throw error;
  }
}
async function getActorById(id) {
  const connection = await con.getConnection();
  const format = await connection.format('select * from actors where actorid = ?', [id]);
  const result = await connection.query(format);
  const option = await getMovieOption();
  result[0].option = option;
  return result;
}
async function getNewlyAddedActor(actorname) {
  try {
    const connection = await con.getConnection();
    const format = await connection.format(GET_NEW_ACTOR, [actorname]);
    const result = await connection.query(format);
    return result;
  } catch (error) {
    throw error;
  }
}

async function removeActorById(id) {
  try {
    const connection = await con.getConnection();
    const formatQuery = await connection.format('delete from actors where actorid = ?', [id]);
    const result = await connection.query(formatQuery);
    await connection.end();
    return result;
  } catch (error) {
    return error;
  }
}

async function addActor(actorObject) {
  try {
    console.log('now here also request come');
    const connection = await con.getConnection();
    const actorInfo = [
      actorObject.actorname,
      actorObject.movieid,
      actorObject.activeYear,
      actorObject.image_url,
      actorObject.totalmovies,
    ];
    const formatQuery = await connection.format(INSERT_INTO_ACTOR, actorInfo);
    const result = await connection.query(formatQuery);
    console.log(result);
    return result;
  } catch (error) {
    console.log('in catch block');
    return error;
  }
}

async function updateActorById(id, actorObject) {
  try {
    const connection = await con.getConnection();
    console.log('try in update');
    const actorInfo = [
      actorObject.actorname,
      actorObject.movieid,
      actorObject.activeYear,
      actorObject.image_url,
      actorObject.totalmovies,
      id,
    ];
    const formatQuery = await connection.format(UPDATE_INTO_ACTOR, actorInfo);
    const result = await connection.query(formatQuery);
    return result;
  } catch (error) {
    console.log('catch in update');
    console.log(error);
    return error;
  }
}

module.exports = {
  getActors,
  removeActorById,
  addActor,
  updateActorById,
  getNewlyAddedActor,
  getMovieOption,
  getActorById,
};
