const Sequelize = require('sequelize')
const conn = require('../database/database')

const User = conn.define("users", {
    cpf: {
        type: Sequelize.BIGINT,
        allowNull:false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: true
        
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false, 
        isEmail: true
    }, 
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
User.sync({ force: false }).then(() => {
    console.log("user table retrieved")
})
module.exports = User
