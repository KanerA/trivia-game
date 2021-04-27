const { Router } = require('express');
const { createUser, updateUserScore } = require('../../../utils');
const user = Router();

user.post('/', createUser);
user.patch('/', updateUserScore);

module.exports = user;