const BaseEntity = require('./bases/base.entity');

class Test extends BaseEntity
{
    constructor(){
        super();
        this.name = "";
        this.description = "";
    }
    static getSchema(){
        return {
            ...this.getBaseSchema(),
            name: String,
            description: String
        };
    }   
}

module.exports = Test;