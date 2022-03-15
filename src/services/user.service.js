const UserRepository = require("../repositories/user.repository");
const { Container } = require("typedi");
class UserService
{
    constructor(){
       this.repository = Container.get(UserRepository);
    }
    
    addUser = async (user) => await this.repository.insert(user);
}

module.exports =  UserService;