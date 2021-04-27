const { Router } = require('express');
const { createUser } = require('../../../utils');
const user = Router();

user.post('/', createUser);

module.exports = user;