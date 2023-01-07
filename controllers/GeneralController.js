const log = require('../PreServicesLayer/loggerService');
const mongo = require('../ServiceLayer/MongoService');

async function  GetHome(req,res) {
    try {
        res.render('home');
    } catch (error) {
        log.ControllerError.log('info',"burada bişeyler oldu hata iste");
        res.status(400).json({
            status: "fail",
        }); 
    }
}

async function PostHome(req,res) {
    var targetValue = req.body.ExchangeType;
    var destinationValue = req.body.ExchangeAmount;

    console.log(req.body);
    try {
        if (targetValue && destinationValue) {
            mongo.RecordExchangeParamaters(targetValue,destinationValue);
        }
        res.send('OK');
    } catch (error) {
        log.ControllerError.log('info',"burada bişeyler oldu hata işte");
        res.status(400).json({
            status: "fail",
        }); 
    }
}

module.exports = {
    GetHome,
    PostHome
}