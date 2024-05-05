const Round = require('../models/round');

const handleGetAllRounds = async(req,res) => {
    const result = await Tournament.find({});
    return res.json(result);
};




module.exports = {
    handleGetAllRounds,
};