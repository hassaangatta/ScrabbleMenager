const express = require('express');

const router = express.Router();

const {
    handleLogin
} = require('../controllers/admin');


router.route('/')
.post(handleLogin)

module.exports = router;