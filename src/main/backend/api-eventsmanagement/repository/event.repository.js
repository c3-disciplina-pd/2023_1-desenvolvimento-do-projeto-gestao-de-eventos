const Event = require('../model/Event');
const UserRepository = require('./user.repository');

class EventRepository{

    add({name, description, date, hour, price, vacancies, location, imageUrl, creator}){
        return Event.create({
            name,
            description,
            date,
            hour: hour,
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

    getByName(name){
        return Event.findOne({
            where: {
                name: name
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

    delete(id){
        Event.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new EventRepository();