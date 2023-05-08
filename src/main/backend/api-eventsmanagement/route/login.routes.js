const {Router} = require('express');
const jwt = require('jsonwebtoken');
const controller = require('../controller/user.controller')

const loginRoutes = new Router();

loginRoutes.get('/:cpf/:password', controller.login)

module.exports = loginRoutes;