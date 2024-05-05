const Player = require('../models/player');
const Round = require('../models/round');
const Tournament = require('../models/tournament');
const fs = require('fs');
const csvParser = require('csv-parser');

const handleGetAllPlayers = async(req,res) => {
    const result = await Player.find({});
    return res.json(result);
};

const handleGetPlayerByID = async(req,res) => {
    const player = await Player.find({_id: req.params.id});
    const rounds = await Round.find({P1ID: req.params.id});
    player.rounds = rounds;
    let won = 0, loss = 0, spread = 0;
    for (let j=0; j<rounds.length; j++)
    {
            let diff = rounds[i].player1Score - rounds[i].player2Score;
            if (diff < 0)
                loss += 1;
            else if (diff > 0)
                won += 1;
            else
                won += 0.5;
                loss += 0.5;
            spread += diff;
    }
    player.won = won;
    player.loss = loss;
    player.spread = spread;
    return res.json(player);
};

const handleAddPlayers = async(req,res) => {
    
    if (!req.file) {
        console.log('No file');
        return res.status(400).json({msg:'No file uploaded.'});
    }

    await Player.deleteMany({TID: req.params.id});
    const tournament = await Tournament.find({_id: req.params.id});

    const filePath = req.file.path;
    const results = [];
    await fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', async() => {
        // res.json(results);
        console.log(results);
        let number = 1;
        for (let j=0; j<results.length; j++)
        {
            results.TID = req.params.id;
            results.playerNumber = number;
            number += 1;
        }
        await Player.insertMany(results);
    });

    return res.json({msg:'All Players Added'});
};

module.exports = {
    handleGetAllPlayers,
    handleAddPlayers,
    handleGetPlayerByID,
};