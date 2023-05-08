class EntityNotFound extends Error{
    constructor(message){
        super(message)
        this.name = "Entity Not Found";
        this.status = 400;
    }
}
module.exports = EntityNotFound;