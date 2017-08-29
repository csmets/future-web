import global from './metadata/global.js';
import routes from './routes/main.js';

const router = new VueRouter({
    routes,
});

const app = new Vue({
    router,
    data: global,
}).$mount('#app');

export { app as default };
