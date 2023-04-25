const Event = require('../model/Event');
const UserRepository = require('./userRepository');

class EventRepository{

    add({name, description, date, price, vacancies, location, imageUrl, creator}){
        return Event.create({
            name,
            description,
            date,
            price,
            vacancies,
            location,
            imageUrl,
            creator,
            isEmphasis: false
        })
    }

    getUserByCpfAndLastName(cpf, creator){
        return UserRepository.getByCpfAndLastName(cpf, creator);
    }

    getAll(){
        return Event.findAll({
            raw: true,
        })
    }

    getById(id){
        return Event.findOne({
            where: {
                id: id
            }
        })
    }

    updatePartialEmphasis(id, isEmphasis){
        Event.update({
            isEmphasis: isEmphasis
        }, {
            where: {
                id: id
            },
        })
    }
}

module.exports = new EventRepository();