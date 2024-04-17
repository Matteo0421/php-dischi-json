const { createApp } = Vue;

createApp({


  data(){
    return{
      apiUrl: 'server.php',
      list: []
    }
  },
  methods: {
    getApi(){
      axios.get(tjis.apiUrl)
       .then(result => {
        this.list = resul.data;
        console.log(this.list);
       })
    }
  },

  mounted(){
    this.getApi();
  }
  
}).mount('#app')