const express = require('express')
const app = express()
const conn = require('./database/database')
const User = require('./model/User')

conn.authenticate().then(() => {
    console.log("conexao feita")
}).catch((msgErro) => {
    console.log(msgErro)
})

app.get("/", (req, res) => {
    res.send("hello")
})


app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});