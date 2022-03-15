const Joi = require('joi');
const { Schema } = require('mongoose');
const BaseEntity = require('./bases/base.entity');

class User
{
    static ContactSchema = new Schema({  // contact array cannot be limited
        contact: {
           type: String,
           max: 15,
           //match: /(^(+88|0088)?(01){1}[3456789]{1}(\d){8})$/
        }
    });

    static getDbSchema(){
        let dbSchema =  {
            email: { 
                type: String,
                required: [true, 'Email is required'],
                trim: true,
                lowercase: true,
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
                validate: {
                    isAsync: true,
                    validator: (value, isValid) => {
                        return this.constructor.findOne({ user: value })
                        .exec((err, user)=>{
                            
                            if(err) throw err;
                            
                            if(user) {
                                if(this.email === user.email) return isValid(true);
                                return isValid(false);  
                            }
                            else return isValid(true);
        
                        });
                    },
                    message:  'This email is already taken!'
                },
            },

            username:{  //unique:true 
                type: String,
                uppercase: true,
                trim: true,
                maxLength: [100, 'Must not be more than 100, got {VALUE}'],
                required: [true, 'Username is required'],
                validate: {
                    isAsync: true,
                    validator: (value, isValid) => {
                        return this.constructor.findOne({ username: value })
                        .exec((err, user)=>{
                            
                            if(err) throw err;
                            
                            return user?
                                //if(this.username === user.username) return isValid(true);
                                //return 
                                isValid(false):
                            //}
                            //else return 
                            isValid(true);
        
                        });
                    },
                    message:  'This Username is already taken!'
                },
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

            dateOfBirth: {
                type: Date,
                min: '1950-01-01',
                max: new Date(new Date().setFullYear(new Date().getFullYear() - 10)).toISOString().split('T')[0]
            },

            contacts: {
                type: [this.ContactSchema]
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

            adminLevel: { /////
                type: Array, //enum
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
        };

        return dbSchema;

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