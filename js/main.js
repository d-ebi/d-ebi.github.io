const app = Vue.createApp({
    el: '#app',
    data() {
        return { techIcons, skills, works }
    },
    mounted() {
        [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(e => {
            return new bootstrap.Tooltip(e);
        });
    },
});

app.mount('#app');
