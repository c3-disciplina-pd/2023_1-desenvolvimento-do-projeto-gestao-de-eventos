const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const conn = require("./database/database");
const User = require("./model/User");
const Event = require('./model/Event')
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv-safe").config()
const jwt = require('jsonwebtoken')


conn
    .authenticate()
    .then(() => {
        console.log("conexao feita");
    })
    .catch((msgErro) => {
        console.log("msgErro");
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.post('/login', (req, res) => {
    var cpf = req.body.cpf;
    var password = req.body.password;
    User.findOne({
        where: {
            cpf: cpf,
            password: password
        },
    }).then((email) => {
        if (email) {
            const token = jwt.sign({ email }, process.env.SECRET, {
                expiresIn: 300
            })
            return res.json({ auth: true, token: token, cpf: cpf })
        } else {
            res.status(401).json({ message: 'Invalid login!' });
        }

    });


})

app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/users/save", async(req, res) => {
    try {
        var cpf = req.body.cpf;
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var email = req.body.email;
        var password = req.body.password;
        // var stringPassword = password.toString();
        // const salt = await bcrypt.genSalt();
        //  const hashedPassowrd = await bcrypt.hash(stringPassword, salt);
        User.create({
            cpf: cpf,
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email,
            type: "Admin"
        }).then(() => {
            res.status(201).send();
        });
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

app.get("/users/all", (req, res) => {
    User.findAll({
        raw: true,
    }).then((user) => {
        res.send(user);
    });
});

app.get("/users/:cpf", (req, res) => {
    var cpf = req.params.cpf;
    User.findOne({
        where: {
            cpf: cpf,
        },
    }).then((user) => {
        res.send(user);
    });
});

app.put("/users/update-tag/:cpf", (req, res) => {
    var cpf = req.params.cpf;
    var type = req.body.type;
    User.update({
        type: type
    }, {
        where: {
            cpf: cpf
        }
    }).then(() => {
        res.status(200).send();
    })
})

app.put("/users/update/:cpf", (req, res) => {
    var cpf = req.params.cpf;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName
    var password = req.body.password;
    var email = req.body.email;
    User.update({
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email
    }, {
        where: {
            cpf: cpf,
        },
    }).then(() => {
        res.status(200).send();
    });
});

app.delete("/users/delete/:cpf", (req, res) => {
    var cpf = req.params.cpf;
    User.destroy({
        where: {
            cpf: cpf,
        },
    }).then(() => {
        res.status(200).send();
    });
});

app.post('/create-event/:cpf', (req, res) => {
    var cpf = req.params.cpf;
    var name = req.body.name;
    var description = req.body.description;
    var date = req.body.date;
    var price = req.body.price;
    var vacancies = req.body.vacancies;
    var location = req.body.location;
    var imageUrl = req.body.imageUrl;
    var creator = req.body.creator;
    var type = req.body.type;
    User.findOne({
        where: {
            cpf: cpf,
            lastName: creator
        }
    }).then((cpf) => {
        if (cpf && type == "Manager" || type == "Admin") {
            Event.create({
                name,
                description,
                date,
                price,
                vacancies,
                location,
                imageUrl,
                creator,
                isEmphasis: false
            }).then(() => {
                res.status(201).send();
            })
        } else {
            res.status(401).json({ message: 'Invalid CPF or auth!' });
        }

    })
})

app.get("/events/all", (req, res) => {
    Event.findAll({
        raw: true,
    }).then((event) => {
        res.send(event);
    });
})

app.get("/events/:id", (req, res) => {
    var id = req.params.id
    Event.findOne({
        where: {
            id: id
        }
    }).then((event) => {
        res.send(event)
    })
})



app.listen(process.env.PORT || 8080, function() {
    console.log(
        "Express server listening on port %d in %s mode",
        this.address().port,
        app.settings.env
    );
});