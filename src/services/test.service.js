const  {Container}  = require('typedi');

class TestService
{
    constructor(){}
    objects = [
        {
            id: 1,
            name: "Test 1"
        },
        {
            id: 2,
            name: "Test 2"
        },
        {
            id: 3,
            name: "Test 3"
        }
    ];
    
    getObjects(){
        return this.objects;
    }
    
    getObjectById(id){
        return this.objects.find(x => x.id == id);
    }

    addObject(object){
        this.objects.push(object);
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