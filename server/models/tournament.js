const mongoose = require('mongoose');

//schema
const tournamentSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    date:{
        type: Date,
        require:true,
    },
    venue:{
        type: String,
        require:true,
    },
    time:{
        type: String,
        require:true,
    },
    categories:{
        type: [String],
        require:true,
    },
    registrationLink:{
        type: String,
        require:true,
    },
    registrationDeadline:{
        type: Date,
        require:true,
    },
    description:{
        type: String,
        require:true,
    },
    noOfRounds:{
        type: Number,
        require:true,
    },
    currentRound:{
        type: Number,
        require:true,
    },
});

//Model
const Tournament = mongoose.model('tournament',tournamentSchema);

module.exports = Tournament;