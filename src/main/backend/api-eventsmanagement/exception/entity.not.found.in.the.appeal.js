class EntityNotFoundInTheAppeal extends Error{
    constructor(message){
        super(message)
        this.name = "Entity Not Found";
        this.status = 404;
    }
}
module.exports = EntityNotFoundInTheAppeal;