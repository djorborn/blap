var mongoose = require('./mongoose')
var Schema = mongoose.Schema

var blogSchema = new Schema({
  title: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  body: String,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  fans: [{type: Schema.Types.ObjectId, ref: 'Person'}]
})

var Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
