const express = require('express');

const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use(express.static('./public'));

const movieRoute = require('./src/movies/movieRouter');
const actorRoute = require('./src/actors/actorRouter');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/HomePage.html`);
});

app.use(movieRoute);
app.use(actorRoute);

app.listen(8080, () => {
});
