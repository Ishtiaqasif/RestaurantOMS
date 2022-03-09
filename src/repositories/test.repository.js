const mongoose = require ("mongoose");
const {TestSchema}  = require('../models/schemas/test.schema');
const Test = require('../models/entities/test.entity');
const BaseRepository  = require('./base.repository');

class TestRepository extends BaseRepository
{
    constructor(){
        super("tests", TestSchema, Test.getInitializedObject());
        this.schema = mongoose.model("tests", TestSchema);
    }
}

module.exports =  TestRepository;