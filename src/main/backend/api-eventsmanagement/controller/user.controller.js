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

exports.login = async(req, res) => {
    /*(req, res) => { //Não sei se seria melhor passar os dados na rota ou body
        userRepository.checkLogin(req.body.cpf, req.body.password).then((email) => {
            if (email) {
                const token = jwt.sign({ email }, process.env.SECRET, {
                    expiresIn: 300
                })
                return res.json({ auth: true, token: token, cpf: cpf })
            } else {
                res.status(401).json({ message: 'Invalid login!' });
            }
        });
    }*/
    await userService.login(req.params.cpf, req.params.password).then(user => {
        res.json(user)
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