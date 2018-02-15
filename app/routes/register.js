const register = require('express').Router()

register.get('/', (req, res) => {
  res.send('register')
})

register.post('/', (req, res) => {
  res.send('register post')
})

module.exports = register
