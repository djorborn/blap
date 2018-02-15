const uid = require('uid-safe')

module.exports = function () {
  return uid.sync(18)
}
