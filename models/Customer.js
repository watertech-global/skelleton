//Watertech models
//Customer

const mongoose = require('mongoose');

const Customer = new mongoose.Schema({
    //here define all the entity 
    //attributs according to its representation
    //in the DB
    idCustomer: {type:Number, default:0},
    idUser_Customer: {type:Number},
    idCompany_Customer: {type:Number},
    account : {
        login: String,
        password: String,
        designation: String
    },
    idMeter_Customer: {type:Number},
});

module.exports = mongoose.model('Customer', Customer);