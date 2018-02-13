const mongoose = require('./mongoose')

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  profile: {
    name: String,
    email: String,
    cell: String
  },
  auth: String
})

const User = mongoose.model('User', userSchema)

module.exports = User
