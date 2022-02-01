const TestRepository = require("../repositories/test.repository");
const { Container } = require("typedi");
const Test = require("../models/entities/test.entity");
const BaseEntity = require("../models/entities/bases/base.entity");

class TestService
{
    constructor(){
       this.repository = Container.get(TestRepository);
    }
    
    async getObjects(){
        return await this.repository.findMany({});
    }
    
    async getObjectById(id){
        return this.repository.findById(x => x.id == id);
    }

    async addObject(object){
        return await this.repository.insert(object);
    }

    async replaceObject(id, object){
        let index = this.objects.findIndex(x => x.id == id);
        this.objects[index] = object;
    }

    async deleteObject(id){
        let index = this.objects.findIndex(x => x.id == id);
        this.objects.splice(index, 1);
    }

    async patchObject(id, object){
        let index = this.objects.findIndex(x => x.id == id);
        let objectToBePatched = this.objects[index];

        objectToBePatched["name"] = object["name"];
    }
}

module.exports =  TestService;