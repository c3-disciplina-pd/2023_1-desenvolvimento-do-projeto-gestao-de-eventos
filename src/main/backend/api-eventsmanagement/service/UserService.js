const userRepository = require("../repositories/userRepository");

class UserService{

    //Classe responsável por tratar e lançar exceções

    //Podem ser lançadas exceptions personalizadas para ser capturadas
    //e lançar diferentes status

    register(body){
        if(userRepository.getByCpf(body.cpf) == null){
            try {
                return userRepository.add(body);
            } catch (e) {
                throw new Error("Falha na inserção");
            }
        }
        throw new Error("Cpf já cadastrado");
    }
    
    getAll(){
        userRepository.getAll();
    }

    getByCpf(cpf){
        userRepository.getByCpf();
    }

    updatePartialTag(cpf, type){
        userRepository.updatePartialTag(cpf, type)
    }

    update(cpf, body){
        userRepository.update(cpf, body)
    }

    delete(cpf){
        userRepository.delete(cpf)
    }
}

module.exports = new UserService();