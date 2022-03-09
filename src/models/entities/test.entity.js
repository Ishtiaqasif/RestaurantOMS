const Joi = require('joi');
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
    static getValidationSchema(){
        return {
            name: Joi.string().required(),
            description: Joi.string().required()
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