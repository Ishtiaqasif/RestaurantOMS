const mongoose = require("mongoose");
const { Schema } = mongoose;
const Test = require("../../models/entities/test.entity");

const TestSchema = new Schema(Test.getSchema(), {
    writeConcern: {
        w: "majority",
        j: true,
        wtimeout: 1000,
    },
});

module.exports = TestSchema;
