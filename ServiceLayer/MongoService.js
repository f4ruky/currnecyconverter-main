// const userModel = require("//UserShema.js");
const model = require("../model/exchangeModel"); 

//console log atılan yerlere log atılabilir.
async function RecordExchangeParamaters(target,destination) {
    console.log(target,destination);
    var s =  await new model(
        {
            ExchangeType: {target:target.Target, destination:target.Destination},
            ExchangeValue: {target:destination.Target, destination:destination.Destination}
        }
        ).save();
    console.log(s);
}

module.exports = {
    RecordExchangeParamaters
}

