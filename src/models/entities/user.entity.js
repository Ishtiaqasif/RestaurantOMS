const Joi = require('joi');
const BaseEntity = require('./bases/base.entity');

class User
{
    static getSchema(){
        return {
            fullName: {
                type: String,
                max: 100
              },
              gender: String,

            email: {
                type: String,

            },

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

module.exports = User;