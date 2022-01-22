const TestRepository = require("../repositories/test.repository");
const { Container } = require("typedi");

class TestService
{
    repository = null;
    constructor(){
       this.repository = Container.get(TestRepository);
    }
    
    getObjects(){
        return this.repository.read();
    }
    
    getObjectById(id){
        return this.objects.find(x => x.id == id);
    }

    addObject(object){
        this.repository.insert(object);
    }

    replaceObject(id, object){
        let index = this.objects.findIndex(x => x.id == id);
        this.objects[index] = object;
    }

    deleteObject(id){
        let index = this.objects.findIndex(x => x.id == id);
        this.objects.splice(index, 1);
    }

    patchObject(id, object){
        let index = this.objects.findIndex(x => x.id == id);
        let objectToBePatched = this.objects[index];

        objectToBePatched["name"] = object["name"];
    }
}

module.exports =  TestService;