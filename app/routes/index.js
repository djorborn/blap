const index = require('express').Router()
const User = require('../modules/User')

index.post('/test', (req, res) => {
  var b = req.body
  console.log(b)
  res.send('hello')
})

index.get('/', checkAuth, require('./login'))
index.use('/', require('./home'))

index.use('/login', require('./login'))

module.exports = index

function checkAuth (req, res, next) {
  next('')
}
