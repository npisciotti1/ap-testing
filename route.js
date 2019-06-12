'use strict';

const jsonParser = require('body-parser').json();
const Router = require('express').Router;
const basicAuth = require('./middleware.js');
const createError = require('http-errors');

const data = require('./data.js');

const testRouter = module.exports = Router();


testRouter.get('/data', basicAuth, function(req, res, next) {
  try {
    res.json(data);
  }
  catch {
    next(createError(500, 'We messed up, congratulations you found a bug'))
  }
});
