const { Router } = require('express');
const { createUser, updateUserScore } = require('../../../utils');
const user = Router();

user.post('/signup', createUser);
user.post('/login', (Req,res) => {});
user.patch('/', updateUserScore);

module.exports = user;