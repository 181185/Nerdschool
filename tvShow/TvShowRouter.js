const express = require('express');
const TvShow = require('./TvShow');


const tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Drama')];

const tvShowRouter = express.Router();


tvShowRouter.get('/', (req, res) => {
  res.json(tvShows);
});

module.exports = tvShowRouter;
