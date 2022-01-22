const mongoose = require ("mongoose");
const { Schema } = mongoose;

const TestSchema = new Schema({
    id: Number,
    name: String
});

module.exports = TestSchema;