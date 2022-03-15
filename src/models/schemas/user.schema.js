const Joi = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserEntity = require("../entities/user.entity");

const UserSchema = new Schema(UserEntity.getDbSchema(), 
{
    writeConcern: {
        w: "majority",
        j: true,
        wtimeout: 1000,
    },
});

//const UserValidationSchema = Joi.object(UserEntity.getValidationSchema());

module.exports = {UserSchema, /*UserValidationSchema*/};
