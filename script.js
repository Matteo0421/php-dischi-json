const { createApp } = Vue;

createApp({


  data(){
    return{
      apiUrl: 'server.php',
      list: [],
      newDisk:{
        poster: '',
        author:'',
        title:'',
        year:'',
        genre:''
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