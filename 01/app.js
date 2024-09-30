const app = Vue.createApp({
    // data, functions
    // template: `<h2>This is the template</h2>`
    data() {
        return {
            title: 'final empire',
            age: 25,
            author: 'dev',
            show: true
        }
    },
    methods: {
        changeTitle() {
            console.log('you clicked me');
            this.title = `fial junior empire`
        },
        toggelPera() {
            this.show = !this.show
        }
    }
});

app.mount("#app")