const login = require('express').Router()

login.get('/', (req, res, next) => {
  res.render('login')
})

module.exports = login
