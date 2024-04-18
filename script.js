const { createApp } = Vue;

createApp({


  data(){
    return{
      apiUrl: 'server.php',
      list: [],
      newDisk:{
        poster: 'a',
        // author:'b',
        // title:'c',
        // year:'d',
        // genre:'e'
      }
    }
  },
  methods: {
    getApi(){
      axios.get(this.apiUrl)
       .then(result => {
        this.list = result.data;
        console.log(this.list);
       })
    }
  },

  mounted(){
    this.getApi();
  }

}).mount('#app')