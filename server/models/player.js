const mongoose = require('mongoose');

//schema
const playerSchema = new mongoose.Schema({
    TID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    name:{
        type: String,
        require:true,
    },
    school:{
        type: String,
        require:true,
    },
    category:{
        type: String,
        require:true,
    },
    playerNumber:{
        type: Number,
        require:true,
    },
});

//Model
const Player = mongoose.model('player',playerSchema);

module.exports = Player;