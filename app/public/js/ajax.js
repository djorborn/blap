// This is a simple ajax function for urlencoded data
// I was only using this much of jquery
// I have not tested it outside of Version 64.0.3282.140 (Official Build) (64-bit)
var XMLHttpRequest

function ajax (url, type, data, callback) {
  // URL
  this.url = url

  // Request Type
  this.type = type

  // Choose Content Type
  if (typeof data === 'object') {
    this.contentType = 'application/json'
    this.data = JSON.stringify(data)
  } else {
    this.contentType = 'application/x-www-form-urlencoded; charset=UTF-8'
    this.data = data
  }

  this.xhr = new XMLHttpRequest()
  this.xhr.open('POST', this.url, true)
  this.xhr.setRequestHeader('Content-Type', this.contentType)

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
