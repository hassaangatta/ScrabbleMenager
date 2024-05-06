const express = require('express');

const router = express.Router();

const {
    handleAddResult,
    handleGetAllRounds,
    handleUpdateResult,
    handleDeleteResult,
} = require('../controllers/round');

router.route('/:id')
.post(handleAddResult)
.get(handleGetAllRounds)
.patch(handleUpdateResult)
.delete(handleDeleteResult)

module.exports = router;