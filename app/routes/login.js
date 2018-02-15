const login = require('express').Router()
const User = require('../modules/User')
const uid = require('../modules/uid')

login.get('/', (req, res, next) => {
  res.render('login')
})

login.post(userLogin)

module.exports = login

function userLogin (req, res, next) {
  User.findOne({username: req.body.user.username}, (err, user) => {
    if (err) throw err
    if (!user) {
      // Bad
      res.send({'status': 'BAD'})
    } else {
      // Good
      if (user.password !== req.body.user.password) {
        res.send({'status': 'BAD'})
      } else {
        // All Good Login
        var auth = uid()
        user.auth = auth
        res.cookie('session', {
          user: user.username,
          auth: auth
        }).sendStatus(200)
      }
    }
  })
}
