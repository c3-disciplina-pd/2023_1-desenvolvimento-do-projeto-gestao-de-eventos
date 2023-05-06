const eventService = require("../service/event.service")

exports.post = async(req, res) => {
    await eventService.add(req.params.cpf, req.body).then((event) => {
        res.status(201).send(event);
    }).catch(e => {
        res.status(400).json({ message: `${e.message}` });
    })
}

exports.getAll = async(req, res) => {
    eventService.getAll().then((event) => {
        res.send(event);
    });
}

exports.get = async(req, res) => {
    await eventService.getByName(req.params.name).then((event) => {
        res.json(event)
    }).catch(e => {
        res.status(400).json({ message: `${e.message}` })
    })
}

exports.put = async(req, res) => {
    
}

exports.patch = async(req, res) => {
    await eventService.updatePartialEmphasis(req.params.id, req.params.cpf, req.body).then((event) => {
        res.status(200).json(event);
    }).catch(e => {
        res.status(400).json({ message: `${e.message}` });
    })
}

exports.delete = async(req, res) => {
    await eventService.delete(req.params.id).then(() => {
        res.status(200).send()
    }).catch(e => {
       res.status(400).json({ message: `${e.message}`}) 
    })
}