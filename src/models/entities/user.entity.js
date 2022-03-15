const Joi = require('joi');
const BaseEntity = require('./bases/base.entity');

class User
{
    static ContactSchema = new Schema({  // contact array cannot be limited
        contactone: {
           type: String,
           required: [true, 'Contact number is required'],
           max: 11,
           match: /^(A|B|AB|O)[+-]$/i, //correct regex
        },
        contactTwo: {
            type: String,
            max: 11,
            match: /^(A|B|AB|O)[+-]$/i, //correct regex
         }
    });

    static getSchema(){
        return {
            email: { // unique:true 
                type: String,
                required: [true, 'Email is required'],
                trim: true,
                lowercase: true,
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
            },

            username:{  //unique:true 
                type: String,
                uppercase: true,
                trim: true,
                maxLength: [100, 'Must not be more than 100, got {VALUE}'],
                required: [true, 'Username is required']
            },

            address: {
                type: String,
                maxLength: 250
            },

            bloodGroup: {
                type: String,
                trim: true,
                match: /^(A|B|AB|O)[+-]$/i,
            },

            dateOfBirth: { // < 1950 && age atleast 10
                type: Date,
                max: 100
            },

            contact: { ///////
                type: ContactSchema,
                trim: true,
                // max: 11,
                // match: /^(A|B|AB|O)[+-]$/i, //correct regex
                required: [true, 'Contact Num is required'],
                match: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
            },

            fullName: {
                type: String,
                trim: true,
                maxLength: 100,
                required: [true, 'Name is required']
            },

            gender: {
                type: String,
                enum: { 
                    values: ['Male', 'Female', 'Undisclosed'], 
                    message: '{VALUE} is not supported' 
                },
                default: 'Undisclosed',
            },

            password: { //////
                type: String,  //hash
                maxLength: 100,
                trim: true,
                required: [true, 'Password is required']
            },

            adminLavel: { /////
                type: String, //enum
                maxLength: 100,
                default: '1',
                required: [true, 'Admin Role is required']
            },

            isActive: {
                type: Boolean,
                default: true,
            },

            image: {
                data: Buffer,
                contentType: String,
            },
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