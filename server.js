const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const tvShowRouter = require('./tvShow/TvShowRouter');

const app = express();
const port = 4242;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/tvshow', tvShowRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/hello', (req, res) => res.send('Hello World'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
