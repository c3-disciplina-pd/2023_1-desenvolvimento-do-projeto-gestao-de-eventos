const {Router} = require('express');
const eventService = require('../service/EventService')
const controller = require("../controller/eventController")

const eventRoutes = new Router();

eventRoutes.post('/:cpf', controller.post)
eventRoutes.get("/all", controller.getAll)
eventRoutes.get("/:name", controller.get)
eventRoutes.patch("/:id/:cpf", controller.patch)
eventRoutes.delete("/:id", controller.delete)

module.exports = eventRoutes;