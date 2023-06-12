const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const conn = require("./database/database");
const User = require("./model/User");
const Event = require("./model/Event");

const userRoutes = require("./route/user.routes");
const eventRoutes = require("./route/event.routes");
const loginRoutes = require("./route/login.routes");

require("dotenv-safe").config();

const app = express();

conn
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso.");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8080, function () {
  console.log(
    "Servidor Express ouvindo na porta %d no modo %s",
    this.address().port,
    app.settings.env
  );
});

app.use("/user", userRoutes);
app.use("/event", eventRoutes);
app.use("/login", loginRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    status: `${status}`,
    message: `${error.message}`,
  });
});

app.put("/events/update/:id/:cpf", (req, res) => {
  const id = req.params.id;
  const cpf = req.params.cpf;
  const editor = req.body.editor;
  const type = req.body.type;
  const isEmphasis = req.body.isEmphasis;

  User.findOne({
    where: {
      cpf: cpf,
      lastName: editor,
    },
  })
    .then((user) => {
      if (user && (type === "Manager" || type === "Admin")) {
        Event.update(
          {
            isEmphasis: isEmphasis,
          },
          {
            where: {
              id: id,
            },
          }
        )
          .then(() => {
            res.status(200).send();
          })
          .catch((error) => {
            res.status(500).json({ message: "Erro ao atualizar o evento." });
          });
      } else {
        res.status(401).json({ message: "CPF inválido ou autenticação inválida!" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Erro ao buscar o usuário." });
    });
});
