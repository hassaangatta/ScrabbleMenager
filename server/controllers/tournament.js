const Tournament = require('../models/tournament');

const handleGetAllTournaments = async(req,res) => {
    const result = await Tournament.find({});
    return res.json(result);
};

const handleGetTournamentByID = async(req,res) => {
    const result = await Tournament.findById({req.params.id});
    return res.json(result);
};

const handleCreateTournament = async(req,res) => {
    const body = req.body;
    if (
        !body ||
        !body.name ||
        !body.date ||
        !body.venue ||
        !body.time ||
        !body.categories ||
        !body.registrationLink ||
        !body.registrationDeadline ||
        !body.description ||
        !body.noOfRounds 
    ){
        return res.status(400).json({msg:"All fields are required"});
    }
    else if (body.categories.length === 0){
        return res.status(400).json({msg:"Categories can not be zero"});
    }

    const result = await User.create({
        name: body.name,
        date: body.date,
        venue: body.venue,
        time: body.time,
        categories: body.categories,
        registrationLink: body.registrationLink,
        registrationDeadline: body.registrationDeadline,
        description: body.description,
        noOfRounds: body.noOfRounds,
        currentRound: 1,
    });

    // console.log(result)

    return res.status(201).json({msg : "Tournament Created"});
};

module.exports = {
    handleGetAllTournaments,
    handleCreateTournament,
    handleGetTournamentByID,
};