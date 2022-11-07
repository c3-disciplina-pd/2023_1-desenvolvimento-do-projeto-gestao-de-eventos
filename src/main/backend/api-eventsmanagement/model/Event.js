const Sequelize = require('sequelize')
const conn = require('../database/database')

const Event = conn.define('events', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    workload: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    createdAt: false

})
Event.sync({ force: false }).then(() => {
    console.log("events table retrieved");
});
module.exports = Event