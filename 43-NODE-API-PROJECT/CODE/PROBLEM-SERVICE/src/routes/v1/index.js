const express = require('express');
const problemRouter = require('./problems.routes');
const v1Router = express.Router();
// if any reques comes and route continues with problems we map it to the problem Router

v1Router.use('/problems', problemRouter);

module.exports = v1Router;
