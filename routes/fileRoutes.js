const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const uploadFile = require('../service/fileRoutes');
const deleteFile = require("../service/fileRoutes")
const formidable = require('express-formidable');
const File = require('../database/models/file')
const jwt = require("jsonwebtoken");
const auth = require("../service/auth");
require('dotenv').config();
router.use(cors());
router.use(bodyParser.json());

router.use(formidable());

// file upload route for gameover page
router.post('/upload', auth, function (req, res) {

    const filename = req.files.file.name
    const filepath = req.files.file.path
    const fileCategory = req.fields.fileCategory

    uploadFile(filepath, filename, res);

    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {

        if (err) {
            res.sendStatus(418)
            return;
        } else {
            File.create({
                filename: filename,
                fileCategory: fileCategory,
                // fileNomineeTags: fileNomineeTags
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

    // File.create({
    //     filename: filename,
    //     fileCategory: fileCategory,
    //     fileNomineeTags: fileNomineeTags
    // }).then(dbFile => {
    //     console.log(dbFile)
    //     return res.json({
    //         success: true,
    //         mes: "file entry created"
    //     })
    // }).catch(err => {
    //     console.log(err)
    //     if (err) return res.json(err);
    // })

})

router.get('/upload', auth, function (req, res) {

    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {

        if (err) {
            res.sendStatus(418)
            return;
        } else {
            File.find({})
            .then(dbFile => {
                
                res.json(dbFile);
            })
            .catch(err => {
                res.json(err);
            });
        }
    })

})

router.delete("/delete", auth, function (req, res) {

    console.log("delete route is ok for " + req.query.id)

    // deleteFile()

    // jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {

    //     if (err) {
    //         res.sendStatus(418)
    //         return;
    //     } else {
    //         File.findOneAndRemove({ _id: req.query.id }, function (err, dbFile) {
    //             if (err) res.status(400).json(err);
    //             console.log("file deleted from mongodb!")
    //             res.json(dbFile);
    //         });
    //     }
    // })

    // File.findOneAndRemove({ _id: req.query.id }, function (err, dbFile) {
    //     if (err) res.status(400).json(err);
    //     console.log("nominee deleted!")
    //     res.json(dbFile);
    // });
});


module.exports = router;