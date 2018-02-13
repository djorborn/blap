const mongoose = require('./mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  profile: {
    name: String,
    email: String,
    cell: String
  },
  auth: String,
  blogs: [{type: Schema.Types.ObjectId, ref: 'Blog'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User
