const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const S3Files = require('../service/fileRoutes');
const formidable = require('express-formidable');
const File = require('../database/models/file')
const jwt = require("jsonwebtoken");
const auth = require("../service/auth");
require('dotenv').config();
router.use(cors());
router.use(bodyParser.json());

router.use(formidable());

// send file upload request to mongoDB and AWS S3 for gameover page
router.post('/upload', auth, function (req, res) {

    // declare variables to store req data
    const filename = req.files.file.name
    const filepath = req.files.file.path
    const fileCategory = req.fields.fileCategory
    const userID = req.fields.userID

    // call uploadFile function from service/fileRoutes.js for AWS S3 upload
    S3Files.uploadFile(filepath, filename, userID, res);

    // use jwt verification before sending request to mongoDB
    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {

        if (err) {
            res.sendStatus(418)
            return;
        } else {
            File.create({
                filename: filename,
                fileCategory: fileCategory,
                // fileNomineeTags: fileNomineeTags
                userID: userID
            })
            .then(dbFile => {
                console.log(dbFile)
                // return res.send({
                //     success: true,
                //     mes: "file entry created"
                // })
            })
        }
    })

})

// get list of uploaded files based on userID
router.get('/upload/:id', auth, function (req, res) {

    // use jwt verification before sending request to mongoDB
    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {

        if (err) {
            res.sendStatus(418)
            return;
        } else {
            File.find({userID: req.params.id})
            .then(dbFile => {
                res.json(dbFile);
            })
            .catch(err => {
                res.json(err);
            });
        }
    })

})

// send delete request to mongoDB and AWS S3
router.delete("/delete", auth, function (req, res) {

    S3Files.deleteFile(req.query.userID+req.query.filename)

    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {

        if (err) {
            res.sendStatus(418)
            return;
        } else {
            File.findOneAndRemove({ _id: req.query.id })
            .then(dbFile => {
            
                console.log(dbFile + "file deleted from mongodb!")
                res.json(dbFile);
            })
        }
    })

});


module.exports = router;