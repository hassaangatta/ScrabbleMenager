const express = require('express');

const router = express.Router();

const {
    handleGetParing,
    handleGenerateParing,
} = require('../controllers/paring');

router.route('/:id/:category')
.get(handleGetParing)
.post(handleGenerateParing)

module.exports = router;