'use strict';

//simple middleware that only allows one user (which we provide to the person being tested)


const createError = require('http-errors');

module.exports = function(req, res, next) {

  var authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(createError(401, 'authorization header required (hint: make sure to send the provided username and password)'));
  }

  var usernamePassword = authHeader.split('Basic ')[1];
  if (!usernamePassword) {
    return next(createError(401, 'Please provide auth credentials using the standard format - "Basic username:password"'));
  }

  var authArray = usernamePassword.split(':');

  req.auth = {
    username: authArray[0],
    password: authArray[1]
  };

  if (!req.auth.username) {
    return next(createError(401, 'username required'));
  }
  if (!req.auth.password) {
    return next(createError(401, 'password required'));
  }

  if(req.auth.username !== 'apTestUser') {
    return next(createError(401, 'please provide the correct username'))
  }

  if(req.auth.username !== 'apIsAwesome1234') {
    return next(createError(401, 'please provide the correct password'))
  }
  next();
};
