const {Router} = require('express');
const EventRepository = require('../repositories/eventRepository')

const eventRoutes = new Router();

//Ainda pode melhorar
eventRoutes.post('/:cpf', (req, res) => {
    var type = req.body.type;
    EventRepository.getUserByCpfAndLastName(req.params.cpf, req.body.creator)
    .then((cpf) => {
        if (cpf && type == "Manager" || type == "Admin") {
            EventRepository.add(req.body).then((event) => {
                res.status(201).json(event);
            })
        } else {
            res.status(401).json({ message: 'Invalid CPF or auth!' });
        }
    })
})

eventRoutes.get("/all", (req, res) => {
    EventRepository.getAll().then((event) => {
        res.send(event);
    });
})

eventRoutes.get("/:id", (req, res) => {
    EventRepository.getById(req.params.id).then((event) => {
        res.send(event)
    })
})

eventRoutes.patch("/:id/:cpf", (req, res) => {
    var type = req.body.type
    EventRepository.getUserByCpfAndLastName(req.params.cpf, req.body.editor)
    .then((cpf) => {
        if (cpf && type == "Manager" || type == "Admin") {
            EventRepository.updatePartialEmphasis(req.params.id, req.body.isEmphasis)
            .then(() => {
                res.status(200).send();
            });
        } else {
            res.status(401).json({ message: 'Invalid CPF or auth!' });
        }
    })
})
module.exports = eventRoutes;