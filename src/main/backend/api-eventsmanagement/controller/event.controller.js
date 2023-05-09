const eventService = require("../service/event.service")

exports.post = (req, res, next) => {
    eventService.add(req.params.cpf, req.body)
        .then(event => res.status(201).send(event))
        .catch(e => next(e));
}

exports.getAll = (req, res, next) => {
    eventService.getAll().then(event => res.send(event)).catch(e => next(e));
}

exports.get = (req, res, next) => {
    eventService.getByName(req.params.name)
        .then(event => res.json(event))
        .catch(e => next(e));
}

exports.put = (req, res) => {
    
}

exports.patch = (req, res, next) => {
    eventService.updatePartialEmphasis(req.params.id, req.params.cpf, req.body)
        .then(event => res.status(200).json(event))
        .catch(e => next(e));
}

exports.delete = (req, res, next) => {
    eventService.delete(req.params.id)
        .then(() => res.status(200).send())
        .catch(e => next(e));
}