const Results = require('../models/resultModels')

const getResults = (req,res)=>{
    res.status(200).send('<h1>This is from get result router</h1>');
}

const postResults = async (req,res) => {
    try{
        const results = await Results.create(req.body);
        res.status(201).send(results);
    }
    catch(err){
        res.status(400).send(err);
    }
}

module.exports = {getResults,postResults};