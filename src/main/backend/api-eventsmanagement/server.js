const express = require("express");
const userRoutes = require("./route/user.routes");
const eventRoutes = require("./route/event.routes");
const loginRoutes = require("./route/login.routes");
const conn = require("./database/database");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv-safe").config();
const app = express();
const User = require("./model/User");
const Event = require("./model/Event");

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

app.listen(process.env.PORT || 8080, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

app.use("/user", userRoutes);
app.use("/event", eventRoutes);
app.use("/login", loginRoutes);

app.use((error, req, res, next) => {
  const status = error.status ? error.status : 500;
  res.status(status).json({
    status: `${status}`,
    message: `${error.message}`,
  });
});
app.use((error, req, res, next) => {
  const status = error.status ? error.status : 400;
  res.status(status).json({
    status: `${status}`,
    message: `${error.message}`,
  });
});

app.put("/events/update/:id/:cpf", (req, res) => {
  var id = req.params.id;
  var cpf = req.params.cpf;
  var editor = req.body.editor;
  var type = req.body.type;
  var isEmphasis = req.body.isEmphasis;
  User.findOne({
    where: {
      cpf: cpf,
      lastName: editor,
    },
  }).then((cpf) => {
    if ((cpf && type == "Manager") || type == "Admin") {
      Event.update(
        {
          isEmphasis: isEmphasis,
        },
        {
          where: {
            id: id,
          },
        }
      ).then(() => {
        res.status(200).send();
      });
    } else {
      res.status(401).json({ message: "Invalid CPF or auth!" });
    }
  });
});
