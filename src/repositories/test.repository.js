const  { Container }  = require('typedi');

class TestRepository
{
    dbContext = null;

    constructor(){
         this.dbContext = Container.get('dbContext');
    }

    insert(object){
        this.dbContext.test.insert(object);
    }

    read(id){
        return this.dbContext.test.findById(id);
    }
    
    update(id, object){
        this.dbContext.test.update(id, object);
    }

    delete(id){
        this.dbContext.test.delete(id);
    }

    replace(id, object){
        this.dbContext.test.replace(id, object);
    }
    
    
}

module.exports =  TestRepository;