const {Router} = require('express');
const userService = require('../service/UserService')

const userRoutes = new Router();

//Responsável por lançar status para o cliente junto com alguma resposta ou não

//Se conecta com Service (como no primeiro metodo) não com Repository (como nos outros)

userRoutes.post("/", async(req, res) => {
    try{
        await userService.register(req.body).then((user) => {
            res.status(201).json(user);
        })
    }catch(e){
        res.status(400).json({message: `${e.message}`})
    }
});

userRoutes.get("/all", (req, res) => {
    userService.getAll().then((user) => {
        res.json(user);
    })
});

userRoutes.get("/:cpf", async(req, res) => {
    try{
        await userService.getByCpf(req.params.cpf).then((user) => {
            res.json(user);
        })
    }catch(e){
        res.status(400).json({message: `${e.message}`})
    }
});

userRoutes.patch("/update-tag/:cpf", (req, res) => {
    userService.updatePartialTag(req.params.cpf, req.body.type).then(() => {
        res.status(200).send();
    })
});

userRoutes.put("/:cpf", async(req, res) => {
    try{
        await userService.update(req.params.cpf, req.body).then((user) => {
            res.status(200).json(user);
        })
    }catch(e){
        res.status(400).json({message: `${e.message}`})
    }
});

userRoutes.delete("/:cpf", async(req, res) => {
    try{
        await userService.delete(req.params.cpf).then(() => {
            res.status(200).send();
        })    
    }catch(e){
        res.status(400).json({message: `${e.message}`})
    }
});
module.exports = userRoutes;