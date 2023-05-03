const eventRepository = require('../repository/eventRepository');
const userReposotory = require('../repository/userRepository')

class EventService{

    async add(cpf, body){
        let user = await userReposotory.getByCpfAndLastName(cpf, body.creator);
        if(user != null){
            if(user.type != "Manager" && user.type != "Admin"){
                throw new Error("Usuário sem autorização")
            }

            return eventRepository.add(body);
        }
        throw new Error("Usuário não encontrado")
    }

    getAll(){
        eventRepository.getAll();
    }

    getById(id){
        eventRepository.getById(id);
    }

    async updatePartialEmphasis(id, cpf, body){
        let user = await userReposotory.getByCpfAndLastName(cpf, body.creator);
        if(user != null){
            if(user.type != "Manager" && user.type != "Admin"){
                throw new Error("Usuário sem autorização")
            }

            return eventRepository.updatePartialEmphasis(id, body.isEmphasis);
        }
        throw new Error("Usuário não encontrado")
    }
}

module.exports = new EventService();