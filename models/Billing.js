//
//Billing model
const mongoose = require('mongoose');

const Billing = new mongoose.Schema({
    idBilling : Number,
    billDateTime: {type:Date, default:Date.now},
    idCompany: Number,
    idCustomer:Number,
    //To get meter SIM NUM
    idMeter : Number,
    idAnalysis : Number,
    tarriffCode

    
});