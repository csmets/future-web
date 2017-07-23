import pageTemplate from './template/page.js';
import homeMeta from './metadata/page/home.js';
import aboutMeta from './metadata/page/about.js';

const routes = [];

const home = {
    template: pageTemplate,
    data: () => homeMeta,
};
routes.push({
    path: '/',
    component: home,
});

const about = {
    template: pageTemplate,
    data: () => aboutMeta,
};
routes.push({
    path: '/about',
    component: about,
});

export { routes as default };
