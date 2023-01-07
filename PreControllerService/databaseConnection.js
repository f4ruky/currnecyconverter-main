async function DbConnect_Remote() {
    mongoose.connect('mongodb+srv://admin:Orcun27.06@cluster0.4xv86ci.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log('Mongo - Remote DB Connection');
    }).catch(()=>{
        console.log("sa")
        log.SystemGeneralErrorLog.log('Mongo Connect -> ',`${e}`);
    });
}

module.exports = {
    DbConnect_Remote
}