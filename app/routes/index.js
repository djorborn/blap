const index = require('express').Router()
const User = require('../modules/User')

index.get('/', checkAuth, require('./login'))
index.use('/', require('./home'))

module.exports = index

function checkAuth (req, res, next) {
  next()
}
