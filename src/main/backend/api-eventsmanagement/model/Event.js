const Sequelize = require('sequelize')
const conn = require('../database/database')

const Event = conn.define('events', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    hour:{
        type: Sequelize.TIME,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    vacancies: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    location: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    creator: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isEmphasis: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }

})
Event.sync({ force: false }).then(() => {
    console.log("events table retrieved");
});
module.exports = Event