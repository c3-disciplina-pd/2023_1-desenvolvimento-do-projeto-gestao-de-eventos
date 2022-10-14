const Sequelize = require("sequelize");
const conn = require("../database/database");

const User = conn.define("users", {
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
});
User.sync({ force: false }).then(() => {
  console.log("user table retrieved");
});
module.exports = User;
