const eventRepository = require('../repository/event.repository');
const userReposotory = require('../repository/user.repository');

const EntityAlreadyExists = require('../exception/entity.already.exists');
const EntityNotFoundInTheAppeal = require('../exception/entity.not.found.in.the.appeal');
const EntityNotFound = require('../exception/entity.not.found');
const SystemFail = require('../exception/system.fail');
const UnauthorizedUser = require('../exception/unauthorized.user');

class EventService{

    async add(cpf, body){
        const eventExist = await eventRepository.getByName(body.name);
        if(!eventExist){

            const userExist = await userReposotory.getByCpfAndLastName(cpf, body.creator);
            if(userExist){
                if(userExist.type != "Manager" && userExist.type != "Admin"){
                    throw new UnauthorizedUser("Usuário sem autorização")
                }
                return eventRepository.add(body);
            }
            throw new EntityNotFoundInTheAppeal("Usuário não encontrado")
        }
        throw new EntityAlreadyExists("Evento com esse nome já cadastrado")
    }

    getAll(){
        return eventRepository.getAll();
    }

    getById(id){
        return eventRepository.getById(id);
    }

    async getByName(name){
        const eventExist = await eventRepository.getByName(name)
        if(eventExist){
            return eventRepository.getByName(name)
        }
        throw new EntityNotFoundInTheAppeal("Evento não encontrado")
    }

    async updatePartialEmphasis(id, cpf, body){
        const eventExist = await userReposotory.getByCpfAndLastName(cpf, body.creator);
        if(eventExist){
            if(eventExist.type != "Manager" && eventExist.type != "Admin"){
                throw new UnauthorizedUser("Usuário sem autorização")
            }

            return eventRepository.updatePartialEmphasis(id, body.isEmphasis);
        }
        throw new EntityNotFoundInTheAppeal("Usuário não encontrado")
    }

    async delete(id){
        const eventExist = await eventRepository.getById(id)
        if(!eventExist){
            throw new EntityNotFoundInTheAppeal("Evento não encontrado")
        }
        eventRepository.delete(id);
    }
}

module.exports = new EventService();