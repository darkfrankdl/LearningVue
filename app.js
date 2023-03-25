
// the follwing creates the vue application.

const app = Vue.createApp({

    // this is a datafuntion to print some data to the website dynamically
    data () {
        return {
            // write here what to return from the data function
            showBooks: true,
            title: 'The final empire', // this is a title property
            author: 'Brandon Sanderson',
            age: 45

        } // returns a data object // -> notice the short hand for a function on a object "function name () {}"
    },
    // component method:
        // add a property inside the createApp object

    methods: {
        // place for all methods for the component that should be run is placed here.
        changeTitle (title) {
            this.title = title // this refernces the component itself

        },
        ToggleShowBooks()
        {
            this.showBooks = !this.showBooks // ! reverses the boolean showBooks.
        }
    }


    // the object passed into the createApp method is the root compoent that controls the #app section of the html
    // these can be 
    // data, functions, compenent template (that is rendered inside the app element)

    //template: '<h2> I am a template </h2>'
}); // this can be created because the lib for vue was imported inside the index.html file, thus a access to a vue object is granted

app.mount('#app'); // this mounts or points to which part of the DOM that vue should control, the #app is the identifier for a specific section of the dom that we create. thus the app elemetn is in the index.html and vue controls everything inside the div tag
