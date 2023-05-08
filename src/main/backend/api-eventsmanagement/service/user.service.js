const userRepository = require("../repository/user.repository");

class UserService{

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

    async login(cpf, password){
        const userExist = await userRepository.checkLogin(cpf, password);
        if(userExist === null){
            throw new Error("Email ou senha inválido.");
        }
        return userExist;
    }

    async getByCpf(cpf){
        const userExist = await userRepository.getByCpf(cpf);
        if(userExist === null){
            throw new Error("Usuário não encontrado");
        }
        try{
            return userExist;
        }catch(e){
            throw new Error("Erro inesperado");
        }
    }

    updatePartialTag(cpf, type){
        return userRepository.updatePartialTag(cpf, type);
    }

    async update(cpf, body){
        const userExist = await userRepository.getByCpf(cpf);
        if(userExist === null){
            throw new Error("Cpf inexistente");
        }
        return userRepository.update(cpf, body)
    }

    async delete(cpf){
        const userExist = await userRepository.getByCpf(cpf);
        if(userExist === null){
            throw new Error("Cpf inexistente") ;
        }
        return userRepository.delete(cpf);
    }
}

module.exports = new UserService();