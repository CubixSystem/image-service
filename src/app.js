'use strict';

/**
 * Init path aliases
 * {@link https://www.npmjs.com/package/app-module-path}
 */
require('app-module-path/register');

const express = require('express');
const requestLogger = require('middlewares/requestLogger');
const imageRouter = require('routers/imageRouter');
const app = express();
const PORT = 3000;

app.use(requestLogger);
app.use('/', imageRouter);
app.use(function errorHandler(err, _req, res, _next) {
  if (err.errno === 'ENOTFOUND') {
    res.status(404);
  } else {
    res.status(500);
  }
  res.json({ error: err.toString() });
  console.error(err);
});

app.listen(PORT, function() {
  console.info(`Listening on ${PORT}`);
});
