import home from './home/main.js';
import about from './about/main.js';

const routes = [];

routes.push({
    path: '/',
    component: home,
});

routes.push({
    path: '/about',
    component: about,
});

export { routes as default };
