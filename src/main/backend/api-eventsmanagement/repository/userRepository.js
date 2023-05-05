const User = require("../model/User");
//const bcrypt = require("bcrypt");

class UserRepository{
    
    add({cpf, firstName, lastName, password, email, number}){
        return User.create({
            cpf: cpf,
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email,
            number: number,
            type: "Admin"
        })
    }

    checkLogin(cpf, password){
        return User.findOne({
            where: {
                cpf: cpf,
                password: password
            },
        })
    }
    
    getByCpfAndLastName(cpf, creator){
        return User.findOne({
            where: {
                cpf: cpf,
                lastName: creator
            }
        })
    }

    getByCpf(cpf){
        return User.findOne({
            where: {
                cpf: cpf,
            },
        })
    }

    getAll(){
        return User.findAll({
            raw: true,
        })
    }

    update(cpf, {firstName, lastName, password, email, number}){
        return User.update({
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email,
            number: number
        }, {
            where: {
                cpf: cpf,
            },
        })
    }

    updatePartialTag(cpf, type){
        return User.update({
            type: type
        }, {
            where: {
                cpf: cpf
            }
        })
    }

    delete(cpf){
        return User.destroy({
            where: {
                cpf: cpf,
            },
        })
    }
}

module.exports = new UserRepository();