const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken");
const Nominee = require('../database/models/nominee');
const User = require('../database/models/user')
const cors = require('cors')
const bodyParser = require('body-parser');
const auth = require("../service/auth");
router.use(bodyParser.json());
router.use(cors());

router.post("/submit", auth, (req, res) => {
    console.log("post route for nominee ok")
    console.log(req.fields)

    const { role, name, contact, email, responsibility, userID } = req.fields;

    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {

        if (err) {
            res.sendStatus(418)
            return;
        } else {
            console.log("nominee entry created for " + userID)
            Nominee.create({
                role: role,
                name: name,
                contact: contact,
                email: email,
                responsibility: responsibility,
                userID: userID
            })
            // .then(({ _id }) => User.findOneAndUpdate({ _id: userID }, { $push: { nominees: _id } }, { new: true }))
            
            .then(dbNominee => {
                console.log(dbNominee)
                return res.json({
                    success: true,
                    mes: "nominee entry created"
                })
            })
        }
    })

    // console.log(req.fields)
    // Nominee.create({
    //     role: role,
    //     name: name,
    //     contact: contact,
    //     email: email,
    //     responsibility: responsibility
    // }).then(dbNominee => {
    //     console.log(dbNominee)
    //     return res.json({
    //         success: true,
    //         mes: "nominee entry created"
    //     })
    // }).catch(err => {
    //     console.log(err)
    //     if (err) return res.json(err);
    // })

})

router.get("/list/:id", (req, res) => {
    Nominee.find({userID: req.params.id})
        .then(dbNominee => {
            // console.log(dbNominee)
            res.json(dbNominee);
        })
        .catch(err => {
            res.json(err);
        });
})

router.put("/update/:id", function (req, res) {
    console.log("update route is ok for " + req.params.id)

    Nominee.findOneAndUpdate({ _id: req.params.id }, function (err, dbNominee) {
        if (err) res.status(400).json(err);
        console.log("nominee deleted!")
        res.json(dbNominee);

    })

})

router.delete("/delete", function (req, res) {
    // res.send("test for nominee route")
    console.log("delete route is ok for " + req.query.id)

    Nominee.findOneAndRemove({ _id: req.query.id }, function (err, dbNominee) {
        if (err) res.status(400).json(err);
        console.log("nominee deleted!")
        res.json(dbNominee);
    });
});


module.exports = router;