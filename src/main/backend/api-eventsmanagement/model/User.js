const Sequelize = require("sequelize");
const conn = require("../database/database");

const User = conn.define("user", {
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true,
    },
    number:{
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
User.sync({ force: false }).then(() => {
    console.log("user table retrieved");
});
module.exports = User;