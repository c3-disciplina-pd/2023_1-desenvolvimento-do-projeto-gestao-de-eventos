const Sequelize = require('sequelize')
const conn = require('../database/database')

const User = conn.define("users", {
    cpf: {
        type: Sequelize.BIGINT,
        allowNull:false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
    }
});
User.sync({ force: false }).then(() => {
    console.log("user table retrieved")
})
module.exports = User
