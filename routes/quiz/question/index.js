const { Router } = require('express');
const question = Router();
const rate = require('./rate');
const { getQuestion } = require('../../../utils');

question.use('/rate', rate);
question.get('/', getQuestion);

module.exports = question;