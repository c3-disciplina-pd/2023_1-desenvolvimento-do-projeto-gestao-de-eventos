const {Router} = require('express');
const User = require("../model/User");
const jwt = require('jsonwebtoken');
const userRepository = require('../repository/user.repository');
const controller = require('../controller/user.controller')

const loginRoutes = new Router();

loginRoutes.get('/:cpf/:password', controller.login)

module.exports = loginRoutes;