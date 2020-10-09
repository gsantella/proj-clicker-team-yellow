const app = new Vue({
  el: '#signup',

  // our data
  data: {
    name: '',
    email: ''
  },
  methods:{
    sendForm: function() {
      console.log({name: this.name, email: this.email});
      alert('form sending');
    }
  }
});