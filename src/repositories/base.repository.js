const mongoose = require ("mongoose");
const TestSchema  = require('../models/schemas/test.schema');

class BaseRepository 
{
    constructor(collectionName, schema, initializedObject){
        this.initializedObject = initializedObject;
        this.schema = mongoose.model(collectionName, schema);
    }

    insert = async (object) => await this.schema.create({...this.initializedObject, ...object});

    insertMany = async (objects) => await this.schema.insertMany(objects);

    findMany = async (query) => await this.schema.find(query);
    
    findById = async (id) => await this.schema.findById(id);

    findOneAndUpdate = async (id, object) => await this.schema.findOneAndUpdate({_id: id}, object, {new: true});
    
    updateOne = async(id, object) => await this.schema.updateOne({_id: id}, object);

    updateSet = async(id, object) => await this.schema.findOneAndUpdate({_id: id}, {$set: object}, {new: true});

    updateMany = async(query, object) => await this.schema.updateMany(query, object);

    delete = async (id, object) => await this.schema.findOneAndDelete({_id: id});

    replace = async (id, object) => await this.schema.replaceOne({_id: id}, object);

    softDeleteById = async(id) => await this.schema.updateOne({_id: id}, {$set: {'metadata.isDeleted': true}});

    softDeleteMany = async(query, object) => await this.schema.updateMany(query, {$set: {isDeleted: true}});
    
}
module.exports =  BaseRepository;