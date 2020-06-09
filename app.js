const app = new Vue({
    el: '#app',
    data: {
        title: "Hello world",
        name: "Arturo",
        url: "<a href='http://www.google.com'>Home2</a>"
    },
    methods: {
        sayHello() {
            this.title = 'Helllo world 2'
        }
    }
});