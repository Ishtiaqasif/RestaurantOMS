const mongoose = require ("mongoose");
const TestSchema  = require('../models/schemas/test.schema');
const BaseRepository  = require('./base.repository');

class TestRepository extends BaseRepository
{
    constructor(){
        super("tests", TestSchema);
        this.schema = mongoose.model("tests", TestSchema);
    }
}

module.exports =  TestRepository;