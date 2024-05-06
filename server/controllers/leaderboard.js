const Tournament = require('../models/tournament');
const Player = require('../models/player');
const Round = require('../models/round');

const comp = (a,b) => {
    if(a.score < b.score)
        return 1;
    else if(a.score > b.score)
        return -1;
    else
    {
        if(a.spread > b.spread)
            return -1;
        else if(a.spread < b.spread)
            return 1;
    }
    return 0;
};

const handleGetLeaderBoard = async(req,res) => {
    const players = await Player.find({TID:req.params.id , category: req.params.category});
    const tournament = await Tournament.find({_id:req.params.id});
    const rounds = await Round.find({TID:req.params.id , category: req.params.category, roundNumber: {$lt:tournament.currentRound}});
    let result = []
    for (let i=0; i<players.length; i++)
    {
        let player = {
            PID: players[i]._id,
            playerNumber: players[i].playerNumber,
            name: players[i].name,
        }
        let score = 0, won=0, loss=0;
        for (let j=0; j<rounds.length; j++)
        {
            if (rounds[i].P1ID === player.PID)
            {
                let diff = rounds[i].player1Score - rounds[i].player2Score;
                if (diff < 0)
                    loss += 1
                else if (diff > 0)
                    won += 1
                else
                    won += 0.5
                    loss += 0.5
                score += diff
            }
        }
        player.spread = score;
        player.won = won;
        player.loss = loss;
        player.score = won - loss;

        result.push(player);
    }
    result.sort(comp(a,b));
    return res.json(result);
};

module.exports = {
    handleGetLeaderBoard,
};