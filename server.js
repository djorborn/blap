const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.set('views', './app/views')

app.use(
  [express.urlencoded({extended: false})],
  [express.static(require('path').join(__dirname, '/app/public'))],
  [require('cookie-parser')()],
  [],
  [require('./app/routes/index')]
).listen(3000)
