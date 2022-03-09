const Joi = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Test = require("../entities/test.entity");

const TestSchema = new Schema(Test.getSchema(), 
{
    writeConcern: {
        w: "majority",
        j: true,
        wtimeout: 1000,
    },
});

const TestValidationSchema = Joi.object(Test.getValidationSchema());

module.exports = {TestSchema, TestValidationSchema};
