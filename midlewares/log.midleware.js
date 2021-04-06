
const logGenerate = async (req, res, next) => {
    try{

        console.log('Time:', Date.now());

        const tracking = {
            host: req.headers.host,
            userAgent: req.headers['user-agent'],
            accept: req.headers.accept,
        }

       console.log(tracking);       

    }catch(err){
        console.log(err);
    }
    

    next();
};




module.exports = {logGenerate};