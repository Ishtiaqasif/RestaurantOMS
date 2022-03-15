const mongoose = require ("mongoose");
const {UserSchema}  = require('../models/schemas/user.schema');
const UserEntity = require('../models/entities/user.entity');
const BaseRepository  = require('./base.repository');

class UserRepository extends BaseRepository
{
    constructor(){
        super("users", UserSchema, UserEntity.getInitializedObject());
        this.schema = mongoose.model("users", UserSchema);
    }
}

module.exports =  UserRepository;