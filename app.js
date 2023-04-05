const app = Vue.createApp({

    data () {
        return {
            
            showBooks: true,
            title: 'The final empire', 
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                {title: 'name of the wind' , author: 'Patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings' , author: 'brandon sanderson',img: 'assets/2.jpg',isFav: false},
                {title: 'the final empire' , author: 'brandon sanderson',img: 'assets/3.jpg',isFav: true}
            ],
            url: 'https://github.com/darkfrankdl'

        } 
    },
    methods: {
        
        changeTitle (title) {
            this.title = title 

        },
        ToggleShowBooks()
        {
            this.showBooks = !this.showBooks 
        },
        HandleEvent(event){
            console.log(event);
        },
        HandleMousemove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        changeIsFav(book){
            book.isFav = !book.isFav;
            console.log(this.books.isFav)
        }
         

    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav) 
        }
    }
}); 

app.mount('#app'); 
