const { Router } = require('express');
const question = require('./question');
const quiz = Router();

quiz.use('/question', question);

module.exports = quiz;