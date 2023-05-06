const {Router} = require('express');
const User = require("../model/User");
const jwt = require('jsonwebtoken');
const userRepository = require('../repository/user.repository');

const loginRoutes = new Router();

loginRoutes.get('/', (req, res) => { //Não sei se seria melhor passar os dados na rota ou body
    userRepository.checkLogin(req.body.cpf, req.body.password).then((email) => {
        if (email) {
            const token = jwt.sign({ email }, process.env.SECRET, {
                expiresIn: 300
            })
            return res.json({ auth: true, token: token, cpf: cpf })
        } else {
            res.status(401).json({ message: 'Invalid login!' });
        }
    });
})

module.exports = loginRoutes;