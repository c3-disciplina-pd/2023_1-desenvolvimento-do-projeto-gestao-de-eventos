class SystemFail extends Error{
    constructor(message){
        super(message)
        this.name = "System Fail";
        this.status = 500;
    }
}
module.exports = SystemFail;