const Sequelize = require('sequelize')

const conn = new Sequelize('eventsmanagement', 'root', '4o88L2a60', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn;