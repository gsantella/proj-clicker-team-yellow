const app = new Vue({
  el: '#signup',

  // our data
  data: {
    name: '',
    email: ''
  },
  methods:{
    sendForm: function() {
      document.getElementById('signUpEmail').value;
      fetch('https://MailGunPractice.dlaff666.repl.co/sign_up?email=[email]&username=[username]')
    }
  }
});