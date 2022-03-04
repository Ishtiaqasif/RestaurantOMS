const BaseEntity = require('./bases/base.entity');

class Test
{
    static getSchema(){
        return {
            name: String,
            description: String,
            metadata: BaseEntity.getBaseSchema(),
        }
    } 
    static getInitializedObject(){ 
        return {
            name: "",
            description: "",
            metadata: BaseEntity.getInitializedBaseObject(),
        }
    } 
}

module.exports = Test;