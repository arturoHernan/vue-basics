new Vue({
    el: '#vue-app',
    data: {
        name: 'Arturo'
    },
    methods: {
        sayHello: function() {
            return "hello " + this.name
        }
    }
});