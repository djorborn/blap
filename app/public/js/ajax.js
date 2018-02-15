// This is a simple ajax function for urlencoded data
// I was only using this much of jquery
// I have not tested it outside of Version 64.0.3282.140 (Official Build) (64-bit)
var XMLHttpRequest

function ajax (url, type, data, callback) {
  this.url = url
  this.type = type
  this.data = data

  this.xhr = new XMLHttpRequest()
  this.xhr.open('POST', this.url, true)
  this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

  this.xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      callback(this.response)
    }
  }

  this.xhr.send(this.data)
}


ajax('/test', 'POST', {
  username: 'Daniel',
  password: 'password'
}, function (res) {
  console.log(res)
})


/* Example
ajax('/test', 'POST', {
  username: 'Daniel',
  password: 'password'
}, function (res) {
  console.log(res)
})
*/
