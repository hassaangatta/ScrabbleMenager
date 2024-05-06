const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage: storage });

const {
    handleAddResult,
} = require('../controllers/round');

router.route('/upload')
.post(upload.single('image'),handleAddResult)

module.exports = router;