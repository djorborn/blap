const splash = require('express').Router()

splash.get('/', (req, res) => {
  res.render('splash', {
    title: 'blap | blog app'
  })
})

module.exports = splash
