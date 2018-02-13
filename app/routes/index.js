const index = require('express').Router()
const User = require('../modules/User')

index.get('/', checkAuth)

index.get('/', (req, res) => {
  res.render('login', {
    title: 'Login'
  })
})

module.exports = index

function checkAuth (req, res, next) {

}
