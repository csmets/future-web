import global from './metadata/global.js';
import routes from './routes.js';

const router = new VueRouter({
    routes,
});

const app = new Vue({
    router,
    data: global,
}).$mount('#app');

export { app as default };
