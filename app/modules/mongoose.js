const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.LOCAL, {})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongoose Error'))
db.once('open', () => console.log('Mongoose Connected'))

module.exports = mongoose
