const userRepository = require("../repositories/userRepository");

class UserService{

    //Classe responsável por tratar e lançar exceções

    //Podem ser lançadas exceptions personalizadas para ser capturadas
    //e lançar diferentes status

    register(body){
        try {
            return userRepository.add(body)
        } catch (e) {
            throw new Error("Falha na inserção");
        }
    }

}

module.exports = new UserService();