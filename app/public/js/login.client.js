var vm = new Vue({
  el: '#login',
  data: {
    username: '',
    password: '',
    error: ''
  },
  methods: {
    submit: function () {
      this.checkCred({
        username: this.username,
        password: this.password
      })
    },
    checkCred: function (cred) {
      axios.post('/login')
        .then(function (res) {
          console.log(res)
        })
    }
  }
})
