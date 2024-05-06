const express = require('express');
const cors = require('cors');

const router = express.Router();

const {
    handleLogin
} = require('../controllers/admin');

router.use(cors());

router.route('/')
.post(handleLogin)

module.exports = router;