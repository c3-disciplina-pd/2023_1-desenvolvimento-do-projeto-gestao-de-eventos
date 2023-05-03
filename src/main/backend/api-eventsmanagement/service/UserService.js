const userRepository = require("../repositories/userRepository");

class UserService{

    //Classe responsável por tratar e lançar exceções

    //Podem ser lançadas exceptions personalizadas para ser capturadas
    //e lançar diferentes status

    async register(body){
        const userExist = await userRepository.getByCpf(body.cpf);
        if(userExist === null){
            try {
                return userRepository.add(body);
            } catch (e) {
                throw new Error("Falha na inserção");
            }
        }
        throw new Error("Cpf já cadastrado");
    }
    
    getAll(){
        return userRepository.getAll();
    }

    async getByCpf(cpf){
        const userExist = await userRepository.getByCpf(cpf);
        if(userExist === null){
            throw new Error("Usuário não encontrado")
        }
        try{
            return userExist;
        }catch(e){
            throw new Error("Erro inesperado")
        }
    }

    updatePartialTag(cpf, type){
        return userRepository.updatePartialTag(cpf, type)
    }

    update(cpf, body){
        return userRepository.update(cpf, body)
    }

    async delete(cpf){
        const userExist = await userRepository.getByCpf(cpf);
        if(userExist === null){
            throw new Error("Cpf inexistente") 
        }
        return userRepository.delete(cpf)
    }
}

module.exports = new UserService();