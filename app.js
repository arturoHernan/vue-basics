const app = new Vue({
    el: '#app',
    data: {
        title: "My personal page",
        name: "Arturo",
        lastName: "Hernandez",
        color: 'green',
        colors: ['blue', 'green', 'orange']
        // views: 10,
        // x: 0,
        // y: 0
    },
    computed: {
        fullName() {
            return `${this.name} ${this.lastName}`
        }
    },
    methods: {
        setColor(color) {
            this.color = color;
        }
        // increaseViews(value) {
        //     this.views += value;
        // },
        // getCoordinates(event) {
        //     this.x = event.clientX;
        //     this.y = event.clientY;
        // },
        // neutral(event) {
        //     event.stopPropagation();
        // },
        // updateName(event) {
        //     this.name = event.target.value;
        // }
    }
});