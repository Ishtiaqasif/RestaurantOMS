const TestRepository = require("../repositories/test.repository");
const { Container } = require("typedi");

class TestService
{
    constructor(){
       this.repository = Container.get(TestRepository);
    }
    
    getObjects = async () => await this.repository.findMany({});
    
    getObjectById = async (id) => await this.repository.findById(id);

    addObject = async (object) => await this.repository.insert(object);

    replaceObject = async (id, object) => await this.repository.findOneAndUpdate(id, object);

    deleteObject = async (id) => await this.repository.delete(id);

    softDeleteObject = async (id) => await this.repository.softDeleteById(id);

    patchObject = async (id, object) => await this.repository.updateSet(id, object);
}

module.exports =  TestService;