const express = require('express')
const userRoutes = require('./routes/user.routes');
const eventRoutes = require('./routes/event.routes');
const loginRoutes = require('./routes/login.routes');
const conn = require("./database/database");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv-safe").config()

const app = express();

conn.authenticate().then(() => {
    console.log("conexao feita");
})
.catch((msgErro) => {
    console.log("msgErro");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8080, function() {
    console.log(
        "Express server listening on port %d in %s mode",
        this.address().port,
        app.settings.env
        );
});

app.use('/user', userRoutes);
app.use('/event', eventRoutes);
app.use('/login', loginRoutes);
