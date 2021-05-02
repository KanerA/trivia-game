const { Router } = require('express');
const { createUser, updateUserScore, userLogin } = require('../../../utils');
const { validateToken } = require('../../../middelwares');
const user = Router();

user.post('/signup', createUser);
user.post('/login', userLogin);
user.patch('/', validateToken, updateUserScore);

module.exports = user;