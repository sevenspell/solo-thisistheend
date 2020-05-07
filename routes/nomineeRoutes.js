const express = require('express')
const router = express.Router()
const Nominee = require('../database/models/nominee')
const cors = require('cors')
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(cors());

router.post("/submit", (req, res) => {
    console.log("post route for nominee ok")

    const { role, name, contact, email, responsibility } = req.fields;
    // console.log(req.fields)
    Nominee.create({
        role: role,
        name: name,
        contact: contact,
        email: email,
        responsibility: responsibility
    }).then(dbNominee => {
        console.log(dbNominee)
        return res.json({
            success: true,
            mes: "nominee entry created"
        })
    }).catch(err => {
        console.log(err)
        if (err) return res.json(err);
    })
})

router.get("/list", (req, res) => {
    Nominee.find({})
        .then(dbNominee => {
            // console.log(dbNominee)
            res.json(dbNominee);
        })
        .catch(err => {
            res.json(err);
        });
})

router.put("/update/:id", function(req, res){
    console.log("update route is ok for " + req.params.id)

    Nominee.findOneAndUpdate({_id: req.params.id}, function (err, dbNominee){
        if (err) res.status(400).json(err);
        console.log("nominee deleted!")
        res.json(dbNominee);

    })

})

router.delete("/delete", function (req, res) {
    // res.send("test for nominee route")
    console.log("delete route is ok for " + req.query.id)
    
    Nominee.findOneAndRemove({_id: req.query.id}, function (err, dbNominee) {
        if (err) res.status(400).json(err);
        console.log("nominee deleted!")
        res.json(dbNominee);
    });
});


module.exports = router;