const {Router} = require('express');
const userService = require('../service/user.service')
const controller = require('../controller/user.controller')

const userRoutes = new Router();

userRoutes.post("/", controller.post);
userRoutes.get("/all", controller.getAll);
userRoutes.get("/:cpf", controller.get);
userRoutes.patch("/update-tag/:cpf", controller.patch);
userRoutes.put("/:cpf", controller.put);
userRoutes.delete("/:cpf", controller.delete);

module.exports = userRoutes;