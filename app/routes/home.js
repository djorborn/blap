const home = require('express').Router()

home.get('/', (req, res) => {
  res.send('Home')
})

module.exports = home
