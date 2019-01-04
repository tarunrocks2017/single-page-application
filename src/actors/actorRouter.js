const router = require('express').Router();

const controller = require('./actorController');

router.get('/actors', async (req, res) => {
  try {
    const result = await controller.getActors();
    res.json(result);
  } catch (error) {
    throw error;
  }
});

router.post('/deleteActor', async (req, res) => {
  try {
    const deletedRow = await controller.removeActorById(req.body.id);
    if (deletedRow.affectedRows > 0) {
      res.json(true);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    res.send(error);
  }
});

router.post('/getOptions', async (req, res) => {
  try {
    const result = await controller.getMovieOption();
    res.json(result);
  } catch (error) {
    throw error;
  }
});

router.post('/addActor', async (req, res) => {
  try {
    const actor = {
      actorname: req.body.actorname,
      movieid: parseInt(req.body.movieid, 10),
      activeYear: req.body.activeYear,
      image_url: req.body.image,
      totalmovies: req.body.totalmovies,
    };
    const result = await controller.addActor(actor);
    if (result.affectedRows > 0) {
      const newlyAddedActor = await controller.getNewlyAddedActor(actor.actorname);
      res.json(newlyAddedActor);
    } else {
      res.json(false);
    }
  } catch (error) {
    throw error;
  }
});

router.post('/editActor', async (req, res) => {
  const result = await controller.getActorById(req.body.id);
  res.json(result);
});

router.post('/updateActor', async (req, res) => {
  const actor = {
    actorname: req.body.actorname,
    movieid: parseInt(req.body.movieid, 10),
    activeYear: req.body.activeYear,
    image_url: req.body.image,
    totalmovies: req.body.totalmovies,
  };
  try {
    const updatedRow = await controller.updateActorById(parseInt(req.body.id, 10), actor);
    if (updatedRow.affectedRows > 0) {
      const result = await controller.getNewlyAddedActor(req.body.actorname);
      res.json(result);
    } else {
      res.send(false);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
