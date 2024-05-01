const express = require('express');

const router = express.Router();

const {
    handleLogin
} = require('../controllers/admin');


router.route('/')
.get(handleLogin)

module.exports = router;