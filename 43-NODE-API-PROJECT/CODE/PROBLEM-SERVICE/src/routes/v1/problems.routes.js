const express = require('express');
const { problemRouter } = require('../../controllers');
const problemRouter = express.Router();
// if any request comes and toute continues with /ping we map it to pingProblemCOntroller

problemRouter.get('/ping');

module.exports = problemRouter;
