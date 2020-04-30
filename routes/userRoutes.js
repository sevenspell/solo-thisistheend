const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')
var bcrypt = require('bcryptjs')
const cors = require('cors')

// router.post('/api/login', passport.authenticate('local'), function (req, res) {
//   res.json(req.user)
// })
router.use(cors());

// signup api route. check for existence of username, if not proceed to create user
router.post('/signup', (req, res) => {
    console.log('user signup');
            
    const { username, email, password } = req.body

    // ADD VALIDATION
    User.findOne({ username: username
     }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {

            const newUser = new User({
                username: username,
                email: email,
                password: password
            })

            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json({
                  success: true,
                  mes: "user account created"
                })
            })
        }
    })
})

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the gameover page.
router.post(
    '/',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
        res.redirect('/gameover')
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
        res.redirect('/gameover')
    } else {
        res.json({ user: null })
    }
})


  // Route for getting some data about our user to be used client side
  router.get('/account', (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({})
    } else {
      // Otherwise send back the user's username and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        id: req.user.id,
        email: req.user.email,

      })
    }
  })

  router.post('/account', function (req, res) {

    var hashedpassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
    email = req.body.email.toLowerCase(); 
      User.update({
        email: email,
        password: hashedpassword
      },
    {
      where: {
        username: req.user.username
      }
    })
      .then(function (data) {
        // var object = {
        //   users: data
        // }
        res.json({ user: data })
      })
      .catch(function (err) {
        console.log(err)
      })
  });
  


router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
        res.redirect('/')
    } else {
        res.send({ msg: 'no user to log out' })
    }
})



module.exports = router