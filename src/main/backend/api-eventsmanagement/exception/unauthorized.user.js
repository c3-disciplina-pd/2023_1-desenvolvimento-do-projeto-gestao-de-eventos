class UnauthorizedUser extends Error{
    constructor(message){
        super(message)
        this.name = "Unauthorized User";
        this.status = 400;
    }
}
module.exports = UnauthorizedUser;