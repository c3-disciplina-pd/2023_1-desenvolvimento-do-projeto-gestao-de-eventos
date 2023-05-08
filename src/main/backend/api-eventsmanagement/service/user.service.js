const userRepository = require("../repository/user.repository");

const EntityAlreadyExists = require('../exception/entity.already.exists');
const EntityNotFoundInTheAppeal = require('../exception/entity.not.found.in.the.appeal');
const EntityNotFound = require('../exception/entity.not.found');
const SystemFail = require('../exception/system.fail');

class UserService{

    async register(body){
        const userExist = await userRepository.getByCpf(body.cpf);
        if(!userExist){
            try {
                return userRepository.add(body);
            } catch (e) {
                throw new SystemFail("Falha na inserção");
            }
        }
        throw new EntityAlreadyExists("Cpf já cadastrado");
    }
    
    getAll(){
        return userRepository.getAll();
    }

    async login(cpf, password){
        const userExist = await userRepository.checkLogin(cpf, password);
        if(!userExist){
            throw new EntityNotFoundInTheAppeal("Cpf ou senha inválido.");
        }
        return userExist;
    }

    async getByCpf(cpf){
        const userExist = await userRepository.getByCpf(cpf);
        if(!userExist){
            throw new EntityNotFoundInTheAppeal("Usuário não encontrado");
        }
        try{
            return userExist;
        }catch(e){
            throw new SystemFail("Erro inesperado");
        }
    }

    updatePartialTag(cpf, type){
        return userRepository.updatePartialTag(cpf, type);
    }

    async update(cpf, body){
        const userExist = await userRepository.getByCpf(cpf);
        if(!userExist){
            throw new EntityNotFoundInTheAppeal("Cpf inexistente");
        }
        return userRepository.update(cpf, body)
    }

    async delete(cpf){
        const userExist = await userRepository.getByCpf(cpf);
        if(!userExist){
            throw new EntityNotFoundInTheAppeal("Cpf inexistente") ;
        }
        return userRepository.delete(cpf);
    }
}

module.exports = new UserService();