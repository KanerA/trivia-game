const { Router } = require('express');
const rate = Router();
const { saveRatedQuestion } = require('../../../../utils');

rate.post('/', saveRatedQuestion);

module.exports = rate;