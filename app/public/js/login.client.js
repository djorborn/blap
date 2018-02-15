var Vue, ajax
var vmLogin = new Vue({
  data: {
    username: 'dee',
    password: 'e',
    error: ''
  },
  methods: {
    submit: function () {
      ajax('/test', 'POST', {
        username: this.username,
        password: this.password
      }, function (res) {
        vmLogin.error = res
      })
    }
  },
  created: function () {
    console.log('created')
  }
})

vmLogin.$mount('#login')
