const mongoose = require ("mongoose");
const TestSchema  = require('../models/schemas/test.schema');

class TestRepository
{
    constructor(){
        this.schema = mongoose.model("tests", TestSchema);
    }

    insert(object){
        console.log('hhh');
        this.schema.insert(object);
    }

    read(id){

        return this.schema.find();
    }
    
    update(id, object){
        //this.dbInstants.test.update(id, object);
    }

    delete(id){
        //this.dbInstants.test.delete(id);
    }

    replace(id, object){
        //this.dbInstants.test.replace(id, object);
    }
    
    
}

module.exports =  TestRepository;