const userService = require("../service/user.service")

exports.post = (req, res, next) => {
    userService.register(req.body)
        .then(user => res.status(201).json(user))
        .catch(e => next(e));
}

exports.getAll = (req, res) => {
    userService.getAll()
        .then(user => res.json(user));
}

exports.get = (req, res, next) => {
    userService.getByCpf(req.params.cpf)
        .then(user => res.json(user))
        .catch(e => next(e));
}

exports.login = (req, res, next) => {
    userService.login(req.params.cpf, req.params.password)
        .then(user => res.json(user))
        .catch(e => next(e));
}

exports.put = (req, res, next) => {
    userService.update(req.params.cpf, req.body)
        .then(user => res.status(200).json(user))
        .catch(e => next(e));
}

exports.patch = (req, res) => {
    userService.updatePartialTag(req.params.cpf, req.body.type).then(() => {
        res.status(200).send();
    })
}

exports.delete = (req, res, next) => {
    userService.delete(req.params.cpf)
        .then(() => res.status(200).send())
        .catch(e => next(e));
}