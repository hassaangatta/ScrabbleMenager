const express = require('express');

const router = express.Router();

const {
    handleGetLeaderBoard,
} = require('../controllers/leaderboard');

router.route('/:id/:category')
.get(handleGetLeaderBoard)

module.exports = router;