//watertech models
//User

const mongoose = require('mongoose');

const User = new mongoose.Schema({
    //Here gotta should use the mongodb default on data seeding...
    //For all IDs
    idUser: {type:Number, default:0},
    username: String,
    password: String,
    roleCode: {type:String, default:'INDFND'},
    location: 
    {
        idCountry:Number,
        number:{type:Number, default:0},
        street:String,
        zipCode:String,
        stateProvince:String
    },
    accessType:String,
    access: String,
    createdAt: {type:Date, default: Date.now},
    updateAt:{type:Date, default: null},
    typeUser: String,
    //From the account entity
    
});

module.exports = mongoose.model('User', User);
