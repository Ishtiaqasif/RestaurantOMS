const mongoose = require("mongoose");
const { Schema } = mongoose;
const BaseEntity = require("../entities/bases/base.entity");
const Test = require("../entities/test.entity");

const TestSchema = new Schema(Test.getSchema(), 
{
    writeConcern: {
        w: "majority",
        j: true,
        wtimeout: 1000,
    },
});

module.exports = TestSchema;
