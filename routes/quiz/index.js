const { Router } = require('express');
const question = require('./question');
const user = require('./user');
const quiz = Router();

quiz.use('/question', question);
quiz.use('/user', user);

module.exports = quiz;