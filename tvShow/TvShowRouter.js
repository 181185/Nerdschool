const express = require('express');
// const TvShow = require('./TvShow');
const TvShowService = require('./TvShowService');


const tvShows = TvShowService.getAll();

const tvShowRouter = express.Router();


tvShowRouter.get('/', (req, res) => {
  res.json(tvShows);
});


module.exports = tvShowRouter;
