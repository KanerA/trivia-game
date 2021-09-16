const { Router } = require('express');
const question = Router();
const rate = require('./rate');
const { getQuestion } = require('../../../utils');
const { validateToken } = require('../../../middelwares');

question.use('/rate', rate);
question.get('/', validateToken, getQuestion);

module.exports = question;