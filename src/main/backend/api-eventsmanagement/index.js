const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const conn = require("./database/database");
const User = require("./model/User");
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
        console.log(msgErro);
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    User.findOne({
        where: {
            email: email,
            password: password
        },
    }).then((email) => {
        if (email) {
            const token = jwt.sign({ email }, process.env.SECRET, {
                expiresIn: 300
            })
            return res.json({ auth: true, token: token })
        } else {
            res.status(500).json({ message: 'Invalid login!' });
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
            type: "User"
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
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
    var type = req.body.type;
    User.update({
        name: name,
        password: password,
        email: email,
        type: type,
    }, {
        where: {
            cpf: cpf,
        },
    }).then(() => {
        res.send("user " + cpf + " updated");
    });
});

app.delete("/users/delete/:cpf", (req, res) => {
    var cpf = req.params.cpf;
    User.destroy({
        where: {
            cpf: cpf,
        },
    }).then(() => {
        res.send("user " + cpf + " deleted");
    });
});

app.listen(process.env.PORT || 8080, function() {
    console.log(
        "Express server listening on port %d in %s mode",
        this.address().port,
        app.settings.env
    );
});