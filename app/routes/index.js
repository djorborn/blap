const index = require('express').Router()
const User = require('../modules/User')

index.post('/test', (req, res) => {
  var b = req.body
  console.log(b)
  res.send('hello')
})

index.get('/', checkAuth, require('./home'))
index.get('/', require('./splash'))

index.get('/login', checkAuth, require('./home'))
index.use('/login', require('./login'))

index.get('/register', checkAuth, require('./home'))
index.use('/register', require('./register'))

module.exports = index

function checkAuth (req, res, next) {
  var auth = req.cookies.auth
  if (!auth) next('route')
  User.findOne({auth: auth}, function (err, user) {
    if (err) throw err
    if (!user) {
      next('route')
    } else {
      next()
    }
  })
}
