const {Router} = require('express');
const UserService = require('../service/UserService')
const UserRepository = require('../repositories/userRepository');

const userRoutes = new Router();

//Responsável por lançar status para o cliente junto com alguma resposta ou não

//Se conecta com Service (como no primeiro metodo) não com Repository (como nos outros)

userRoutes.post("/", async(req, res) => {
    try{
        await UserService.register(req.body).then((user) => {
            res.status(201).json(user);
        })
    }catch(e){
        res.status(400).end()
    }
});

userRoutes.get("/all", (req, res) => {
    UserRepository.getAll().then((user) => {
        res.json(user);
    })
});

userRoutes.get("/:cpf", (req, res) => {
    UserRepository.getByCpf(req.params.cpf)
    .then((user) => {
        res.json(user);
    })
});

userRoutes.patch("/update-tag/:cpf", (req, res) => {
    UserRepository.updatePartialTag(req.params.cpf, req.body.type).then(() => {
        res.status(200).send();
    })
});

userRoutes.put("/:cpf", (req, res) => {
    UserRepository.update(req.params.cpf, req.body).then((user) => {
        res.status(200).json(user);
    })
});

userRoutes.delete("/:cpf", (req, res) => {
    UserRepository.delete(req.params.cpf).then(() => {
        res.status(200).send();
    })
});
module.exports = userRoutes;