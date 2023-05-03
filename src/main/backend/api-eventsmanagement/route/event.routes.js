const {Router} = require('express');
const eventService = require('../service/EventService')

const eventRoutes = new Router();

eventRoutes.post('/:cpf', async(req, res) => {
    try{
        await eventService.add(req.params.cpf, req.body).then((event) => {
            res.status(201).json(event);
        })
    }catch(e){
        res.status(400).json({ message: `${e.message}` });
    }
})

eventRoutes.get("/all", (req, res) => {
    eventService.getAll().then((event) => {
        res.send(event);
    });
})

eventRoutes.get("/:id", (req, res) => {
    eventService.getById(req.params.id).then((event) => {
        res.send(event)
    })
})

eventRoutes.patch("/:id/:cpf", async(req, res) => {
    try{
        await eventService.updatePartialEmphasis(req.params.id, req.params.cpf, req.body).then((event) => {
            res.status(200).json(event);
        })
    }catch(e){
        res.status(400).json({ message: `${e.message}` });
    }
})

module.exports = eventRoutes;