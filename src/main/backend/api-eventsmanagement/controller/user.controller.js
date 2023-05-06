const userService = require("../service/user.service")

exports.post = async(req, res) => {
    await userService.register(req.body).then((user) => {
        res.status(201).json(user);
    }).catch(e => {
        res.status(400).json({message: `${e.message}`})
    })
}

exports.getAll = async(req, res) => {
    userService.getAll().then((user) => {
        res.json(user);
    })
}

exports.get = async(req, res) => {
    await userService.getByCpf(req.params.cpf).then((user) => {
        res.json(user);
    }).catch(e => {
        res.status(400).json({message: `${e.message}`})
    })
}

exports.put = async(req, res) => {
    await userService.update(req.params.cpf, req.body).then((user) => {
        res.status(200).json(user);
    }).catch(e => {
        res.status(400).json({message: `${e.message}`})
    })
}

exports.patch = (req, res) => {
    userService.updatePartialTag(req.params.cpf, req.body.type).then(() => {
        res.status(200).send();
    })
}

exports.delete = async(req, res) => {
    await userService.delete(req.params.cpf).then(() => {
        res.status(200).send();
    }).catch(e => {
        res.status(400).json({message: `${e.message}`})
    })
}