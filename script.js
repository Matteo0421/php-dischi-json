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
    },

    addNewDisk(){
      const data = new FormData();
      data.append('newDiskPoster', this.newDisk.poster)
      data.append('newDiskAuthor', this.newDisk.author)
      data.append('newDiskTitle', this.newDisk.title)
      data.append('newDiskYear', this.newDisk.year)
      data.append('newDiskGenre', this.newDisk.genre)


      axios.post(this.apiUrl, data)
        .then(result =>{
          this.list = result.data;
        })
    }
  },

  mounted(){
    this.getApi();
  }

}).mount('#app')