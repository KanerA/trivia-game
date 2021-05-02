const { Router } = require('express');
const { createUser, updateUserScore, userLogin, getAllUsers } = require('../../../utils');
const { validateToken } = require('../../../middelwares');
const user = Router();

user.post('/signup', createUser);
user.post('/login', userLogin);
user.patch('/', validateToken, updateUserScore);
user.get('/usersinfo', validateToken, getAllUsers);

module.exports = user;