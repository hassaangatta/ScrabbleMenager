const mongoose = require('mongoose');

//schema
const roundSchema = new mongoose.Schema({
    TID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    category:{
        type: String,
        require:true,
    },
    roundNumber:{
        type: Number,
        require:true,
    },
    P1ID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    P2ID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    player1Score:{
        type: Number,
        require:true,
    },
    player2Score:{
        type: Number,
        require:true,
    },
});

//Model
const Round = mongoose.model('round',roundSchema);

module.exports = Round;