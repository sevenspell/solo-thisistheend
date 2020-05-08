const jwt = require("jsonwebtoken");
require('dotenv').config();

function auth(req, res, next) {

    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
        return;
    }




    // const token = req.header("x-auth-token")

    // //check for token
    // if (!token) {
    //     return res.status(401).json({ msg: "no token, authorization denied" })
    // }

    // try {
    //     //verify token
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //     //add user from payload
    //     req.user = decoded;
    //     next();

    // } catch (e) {
    //     res.status(400).json({ msg: "token is not valid"})
    // }

}

module.exports = auth;