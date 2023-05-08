class EntityAlreadyExists extends Error{
    constructor(message){
        super(message)
        this.name = "Entity Already Exists";
        this.status = 400;
    }
}
module.exports = EntityAlreadyExists;