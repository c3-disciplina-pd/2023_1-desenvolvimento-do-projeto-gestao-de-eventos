const Sequelize = require('sequelize')
const conn = require('../database/database')

const Event = conn.define('events', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    workload: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },

})
Event.sync({ force: false }).then(() => {
    console.log("events table retrieved");
});
module.exports = Event