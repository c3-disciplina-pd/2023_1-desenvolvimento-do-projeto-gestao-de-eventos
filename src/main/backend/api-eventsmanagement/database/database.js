const Sequelize = require('sequelize')

const conn = new Sequelize('eventsmanagement', 'root', 'SENHADB', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn;