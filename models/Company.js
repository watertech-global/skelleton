//watertech models
//Company

const mongoose = require('mongoose');

const Company = new mongoose.Schema({
    //Here gotta should use the mongodb default on data seeding...
    //For all IDs
    idCompany: {type:Number, default:0},
    companyName: String,
    companyAdress: 
    {
        idCountry:Number,
        number:{type:Number, default:0},
        street:String,
        zipCode:String,
        stateProvince:String
    },
    companyContact: 
    {
        contact:String,
        email:String,
    },
    //A company has an account on wt
    idUserCompany : Number,
    tariffCode : Number
});

module.exports = mongoose.model('Company', Company);
