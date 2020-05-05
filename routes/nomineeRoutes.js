const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
router.use(cors());
router.use(bodyParser.json());











module.exports = router;