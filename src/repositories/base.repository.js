const mongoose = require ("mongoose");
const TestSchema  = require('../models/schemas/test.schema');

class BaseRepository 
{
    constructor(collectionName, schema){
        this.schema = mongoose.model(collectionName, schema);
    }

    insert = async (object) => await this.schema.create(object);

    insertMany = async (objects) => await this.schema.insertMany(objects);

    findMany = async (query) => await this.schema.find(query);
    
    findById = async () => await this.schema.findById(id);
    
    updateOne = async(id, object) => await this.schema.updateOne({_id: id}, object);

    updateMany = async(query, object) => await this.schema.updateMany(query, object);

    replace = async (id, object) => await this.schema.replaceOne({_id: id}, object);

    softDeleteById = async(id, object) => await this.schema.updateOne({_id: id}, {$set: {isDeleted: true}});

    softDeleteMany = async(query, object) => await this.schema.updateMany(query, {$set: {isDeleted: true}});
    
}
module.exports =  BaseRepository;