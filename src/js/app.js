import global from './metadata/global.js';

const index = { template: '<div>index</div>' };
const about = { template: '<div>about</div>' };

const routes = [
    { path: '/', component: index },
    { path: '/about', component: about },
];

const router = new VueRouter({
    routes,
});

const app = new Vue({
    router,
    data: global,
}).$mount('#app');

export { app as default };
