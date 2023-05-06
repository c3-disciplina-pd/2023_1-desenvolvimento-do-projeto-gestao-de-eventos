const eventRepository = require('../repository/event.repository');
const userReposotory = require('../repository/user.repository')

class EventService{

    async add(cpf, body){
        const eventExist = await eventRepository.getByName(body.name);
        if(eventExist === null){

            const userExist = await userReposotory.getByCpfAndLastName(cpf, body.creator);
            if(userExist != null){
                if(userExist.type != "Manager" && userExist.type != "Admin"){
                    throw new Error("Usuário sem autorização")
                }
                return eventRepository.add(body);
            }
            throw new Error("Usuário não encontrado")
        }
        throw new Error("Evento com esse nome já cadastrado")
    }

    getAll(){
        eventRepository.getAll();
    }

    getById(id){
        return eventRepository.getById(id);
    }

    async getByName(name){
        const eventExist = await eventRepository.getByName(name)
        if(eventExist != null){
            return eventRepository.getByName(name)
        }
        throw new Error("Evento não encontrado")
    }

    async updatePartialEmphasis(id, cpf, body){
        const user = await userReposotory.getByCpfAndLastName(cpf, body.creator);
        if(user != null){
            if(user.type != "Manager" && user.type != "Admin"){
                throw new Error("Usuário sem autorização")
            }

            return eventRepository.updatePartialEmphasis(id, body.isEmphasis);
        }
        throw new Error("Usuário não encontrado")
    }

    async delete(id){
        const eventExist = await eventRepository.getById(id)
        if(eventExist === null){
            throw new Error("Evento não encontrado")
        }
        eventRepository.delete(id);
    }
}

module.exports = new EventService();