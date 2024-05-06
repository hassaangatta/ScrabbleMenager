const express = require('express');

const router = express.Router();

const {
    handleGetAllTournaments,
    handleCreateTournament,
} = require('../controllers/tournament');

const {
    handleGetLeaderBoard,
} = require('../controllers/leaderboard');


router.route('/')
.get(handleGetAllTournaments)
.post(handleCreateTournament)

router.route('/:id/:category')
.get(handleGetLeaderBoard)

module.exports = router;