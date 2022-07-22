const { processData : serviceProcessData } = require('./data.service');

const get =(req, res)=> {
    res.status(200).json({"message":"Ok"})

}

const processData =async(req, res)=> {
    try{
        const {amount, term, interest} = req.body;
        const dataDTO = {
            amount: amount,
            term: term,
            interest, interest
        };
        const response = await serviceProcessData(dataDTO);
        res.status(200).json(response);
    } catch(error){
        console.log(error);
    }
}

module.exports = {
    get,
    processData
}