const {Router} = require('express');
const eventService = require('../service/EventService')

const eventRoutes = new Router();

eventRoutes.post('/:cpf', async(req, res) => {
    try{
        await eventService.add(req.params.cpf, req.body).then((event) => {
            res.status(201).send(event);
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

eventRoutes.get("/:name", async(req, res) => {
    try{
        await eventService.getByName(req.params.name).then((event) => {
            res.json(event)
        })
    }catch(e){
        res.status(400).json({ message: `${e.message}` })
    }
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

eventRoutes.delete("/:id", async(req, res) => {
    try{
        await eventService.delete(req.params.id).then(() => res.status(200).send())
    }catch(e){
        res.status(400).json({ message: `${e.message}` })
    }
})

module.exports = eventRoutes;