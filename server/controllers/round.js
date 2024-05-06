const Round = require('../models/round');
const Player = require('../models/player');

const handleGetAllRounds = async (req, res) => {
    const result = await Round.find({TID:req.params.id});
    return res.json(result);
};

const handleUpdateResult = async (req,res) => {
    const result = await Round.findByIdAndUpdate(req.params.id,req.body);
    return res.json({status:'Sucess'});
};

const handleDeleteResult = async (req,res) => {
    const result = await Round.findByIdAndDelete(req.params.id);
    return res.json({status:'Sucess'});
};

const handleAddResult = async (req, res) => {
    const body = req.body;
    if (
        !body ||
        !body.category ||
        !body.round ||
        !body.player1Name ||
        !body.player1Number ||
        !body.player1Score ||
        !body.player2Name ||
        !body.player2Number ||
        !body.player2Score 
    ){
        return res.status(400).json({msg:"All fields are required"});
    }
    const player1 = await Player.find({TID:req.params.TID, playerNumber: body.player1Number});
    const player2 = await Player.find({TID:req.params.TID, playerNumber: body.player2Number});
    const result = await Round.create({
        TID: req.params.TID,
        category: body.category,
        roundNumber: body.round,
        P1ID: player1._id,
        P2ID: player2._id,
        player1Score: body.player1Score,
        player2Score: body.player2.Score,
    });
    // category , round, p1name, p1NUmbe, p1 score, p2name, p2number , p2score
    return res.json({msg:"Result Added"});
};

module.exports = {
    handleGetAllRounds,
    handleAddResult,
    handleDeleteResult,
    handleUpdateResult,
};
