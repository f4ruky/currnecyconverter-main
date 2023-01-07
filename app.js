//freamworks
const express = require('express');
global.mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
const path = require("path");

//Inline Service
const logger = require('./PreServicesLayer/loggerService');
const generalRouthe = require('./routhe/generalRouthe');
const mongoDb = require('./PreControllerService/databaseConnection');



//freamworks conf 
const app = express()
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')));

mongoDb.DbConnect_Remote();

//use routhe
app.use('/',generalRouthe);


//Port Conf
app.listen(80,()=>{
    console.log(`80 Port Run!`);
    logger.portLogger_Active.log('info',`Port 80, is active!`);
    }).on('error',function (err) {
        console.log(`80 Port NOT RUN!`);
        logger.portLogger_NonActived.log('error',`${err}`);
    });

module.exports = mongoose;