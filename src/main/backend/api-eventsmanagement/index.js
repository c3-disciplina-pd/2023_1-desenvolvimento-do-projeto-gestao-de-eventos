const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const conn = require('./database/database')
const User = require('./model/User')
const bodyParser = require('body-parser')
conn.authenticate().then(() => {
    console.log("conexao feita")
}).catch((msgErro) => {
    console.log(msgErro)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hello")
})

app.post("/users/save", async (req, res) => {
    try { 
    var cpf = req.body.cpf
    var name = req.body.name
    var email = req.body.email
    var password = req.body.password
    const salt = await bcrypt.genSalt()
        User.create({
            cpf: cpf,
            name: name,
            password: await bcrypt.hash(password, salt),
            email: email,
            
        }).then(() => {
            res.status(201).send()
        }) 
    } catch {
        res.status(500).send()
    }
    
    
    
})

app.get("/users/all", (req, res) => {
    User.findAll({
        raw: true
    }).then(user => {
        res.send(user)
    })
})

app.get("/users/:cpf", (req, res) => {
    var cpf = req.params.cpf
    User.findOne({
        where: {
            cpf: cpf
        }
    }).then(user => {
        res.send(user)
    });
})

app.put("/users/update/:cpf", (req, res) => {
    var cpf = req.params.cpf
    var name = req.body.name
    var password = req.body.password
    var email = req.body.email
    User.update({
        name: name,
        password: password,
        email: email,
    }, {
        where: {
            cpf: cpf
        }
    }).then(() => {
        res.send("user" + cpf + " updated")
    })
})

app.delete("/users/delete/:cpf", (req, res) => {
    var cpf = req.params.cpf
    User.destroy({
        where: {
            cpf: cpf
        }
    }).then(() => {
        res.send("user " + cpf + " deleted")
    })
})

// ==================================================

app.post("/admins/save", (req, res) => {
    var cpf = req.body.cpf
    var name = req.body.name
    var password = req.body.password
    var email = req.body.email
    
    Admin.create({
        cpf: cpf,
        name: name,
        password: password,
        email: email,
        
    }).then(() => {
        res.send("admin " + cpf + " saved")
    })
})

app.get("/admins/all", (req, res) => {
    Admin.findAll({
        raw: true
    }).then(user => {
        res.send(user)
    })
})

app.get("/admins/:cpf", (req, res) => {
    var cpf = req.params.cpf
    Admin.findOne({
        where: {
            cpf: cpf
        }
    }).then(user => {
        res.send(user)
    });
})

app.put("/admins/update/:cpf", (req, res) => {
    var cpf = req.params.cpf
    var name = req.body.name
    var password = req.body.password
    var email = req.body.email
    Admin.update({
        name: name,
        password: password,
        email: email,
    }, {
        where: {
            cpf: cpf
        }
    }).then(() => {
        res.send("admin" + cpf + " updated")
    })
})

app.delete("/admins/delete/:cpf", (req, res) => {
    var cpf = req.params.cpf
    Admin.destroy({
        where: {
            cpf: cpf
        }
    }).then(() => {
        res.send("admin " + cpf + " deleted")
    })
})






app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});