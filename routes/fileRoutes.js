const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const uploadFile = require('../service/fileRoutes');
const formidable = require('express-formidable');
require('dotenv').config();
router.use(cors());
router.use(bodyParser.json());

router.use(formidable());

// file upload route for gameover page
router.post('/upload', function (req, res) {
    const filename = req.files.file.name
    const filepath = req.files.file.path

    uploadFile (filepath, filename, res);

    // File.Create()

})

// router.get('/upload', function (req, res) {

// })


module.exports = router;