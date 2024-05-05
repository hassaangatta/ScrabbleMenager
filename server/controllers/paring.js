import Math;
const Tournament = require('../models/tournament');
const Player = require('../models/player');
const Round = require('../models/round');

const handleGetParing = async(req,res) => {
    const players = await Player.find({TID:req.params.id , category: req.params.category});
    const tournament = await Tournament.find({_id:req.params.id});
    const rounds = await Round.find({TID:req.params.id , category: req.params.category, roundNumber: {$lte:tournament[0].currentRound}});
    let result = []
    for (let i=0; i<players.length; i++)
    {
        let player = {
            PID: players[i]._id,
            playerNumber: players[i].playerNumber,
            name: players[i].name,
        }
        let matches = [];
        for (let j=0; j<tournament[0].currentRound; j++)
        {
            matches.push('');
        }
        for (let j=0; j<rounds.length; j++)
        {
            if (rounds[i].P1ID === player.PID)
            {
                matches[rounds[i].roundNumber - 1] = rounds[i].P2ID;
            }
        }
        player.matches = matches;
        result.push(player);
    }
    return res.json(result);
};

const handleGenerateParing = async(req,res) => {
    const players = await Player.find({TID:req.params.id});
    const tournament = await Tournament.find({_id:req.params.id});
    
    if (tournament[0].currentRound == tournament[0].noOfRounds)
    {
        return res.json({msg:'Tournament Ended'});
    }

    tournament[0].currentRound = tournament[0].currentRound + 1;
    
    await Tournament.create(tournament[0]);

    const rounds = await Round.find({TID:req.params.id, roundNumber: {$lte:tournament[0].currentRound}});
    
    for (let k=0; k<tournament[0].categories.length; k++)
    {
        let board = []
        for (let i=0; i<players.length; i++)
        {
            if (players[i].category === tournament[0].categories[k])
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
    
                board.push(player);
            }
        }
        board.sort(cmp(a,b){
            if(a.score < b.score){
                return 1;
            }
            else if(a.score > b.score){
                return -1;
            }
            else{
                if(a.spread > b.spread){
                    return -1;
                }
                else if(a.spread < b.spread){
                    return 1;
                }
            }
            return 0;
        });
        const tens = Math.floor((board.length)/10);
        const remaining = (board.length)%10;
        let start = 0;
        let paring = [];
        for (let i=0; i<tens; i++)
        {
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + 0].PID,
                P2ID: board[start + 1].PID,
                player1Score: 0,
                player2Score: 0,
            });
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + 1].PID,
                P2ID: board[start + 0].PID,
                player1Score: 0,
                player2Score: 0,
            });
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + 2].PID,
                P2ID: board[start + 3].PID,
                player1Score: 0,
                player2Score: 0,
            });
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + 3].PID,
                P2ID: board[start + 2].PID,
                player1Score: 0,
                player2Score: 0,
            });
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + 4].PID,
                P2ID: board[start + 7].PID,
                player1Score: 0,
                player2Score: 0,
            });
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + 5].PID,
                P2ID: board[start + 8].PID,
                player1Score: 0,
                player2Score: 0,
            });
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + 6].PID,
                P2ID: board[start + 9].PID,
                player1Score: 0,
                player2Score: 0,
            });
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + 7].PID,
                P2ID: board[start + 4].PID,
                player1Score: 0,
                player2Score: 0,
            });
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + 8].PID,
                P2ID: board[start + 5].PID,
                player1Score: 0,
                player2Score: 0,
            });
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + 9].PID,
                P2ID: board[start + 6].PID,
                player1Score: 0,
                player2Score: 0,
            });

            start += 10;
        }
        for (let i=0; i<(remaining/2); i++)
        {
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + i].PID,
                P2ID: board[start + i + (remaining/2)].PID,
                player1Score: 0,
                player2Score: 0,
            });
            paring.push({
                TID: tournament[0]._id,
                category: tournament[0].categories[k],
                roundNumber: tournament[0].currentRound,
                P1ID: board[start + i + (remaining/2)].PID,
                P2ID: board[start + i].PID,
                player1Score: 0,
                player2Score: 0,
            });
        }
        const result = await Round.insertMany(paring);
    }
    
    return res.status(201).json({msg : 'Pairing Generated'});
};

module.exports = {
    handleGetParing,
    handleGenerateParing,
};