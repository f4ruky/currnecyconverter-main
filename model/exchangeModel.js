//const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Int } = require('mssql');
const { v4: uuidv4 } = require('uuid');

const Exchange_Shema = new Schema({
    Id:{
        type: String,
        unique:true
    },
    ExchangeType:{
        target:String,
        destination:String
    },
    ExchangeValue:{
        target:Number,
        destination:Number
    },
    createAt:{
        type: String, 
        default: new Date(Date.now() + 3 * 60 * 60 * 1000),
    }
});

Exchange_Shema.pre('validate',function(next) {
    if (this.Id == null) {
        this.Id = uuidv4();
    }else{
        this.Id = this.Id
    }
    next();
});
const exchange= mongoose.model('Exchange',Exchange_Shema);
module.exports = exchange;
