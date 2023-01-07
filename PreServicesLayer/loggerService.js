// Sistemin log kayıtlarının oluşturulduğu sistem dosya.
const {createLogger,transports,format} = require('winston');

//----------------- PORT LOG -----------------------
const portLogger_Active = createLogger({
    transports:[
        new transports.File({
            filename:'./Logs/PortListen.log',
            level:'info',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
});

const portLogger_NonActived = createLogger({
    transports:[
        new transports.File({
            filename:'./Logs/PortNotListen.log',
            level:'error',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
});

const Transaction_Complate = createLogger({
    transports:[
        new transports.File({
            filename:'./Logs/TransactionActive.log',
            level:'info',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
});

const Transaction_Fail = createLogger({
    transports:[
        new transports.File({
            filename:'./Logs/TransactionFailed.log',
            level:'error',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
});

const ControllerError = createLogger({
    transports:[
        new transports.File({
            filename:'./Logs/ControllerError.log',
            level:'info',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
});


module.exports = {
    Transaction_Complate,
    Transaction_Fail,
    portLogger_Active,
    portLogger_NonActived,
    ControllerError
}
