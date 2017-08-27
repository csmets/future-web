import pageTemplate from './template/page.js';
import homeMeta from './metadata/page/home.js';
import homeTemplate from './template/home.js';
import aboutMeta from './metadata/page/about.js';

const routes = [];

const home = {
    template: homeTemplate,
    data: () => homeMeta,
    created: function() {
        this.loadReddit();
    },
    methods: {
        loadReddit: function() {

            function status(response) {
                console.log(response.status);
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response);
                } else {
                    return Promise.reject(new Error(response.statusText));
                }
            }

            function json(response) {
                return response.json();
            }

            fetch('https://www.reddit.com/r/funny.json')
                .then(status)
                .then(json)
                .then((data) => {
                    const entries = data.data.children;
                    console.log(entries);
                    entries.forEach((entry) => {
                        const post = {
                            title: entry.data.title,
                            domain: entry.data.domain,
                            permalink: `https://www.reddit.com${entry.data.permalink}`,
                            thumbnail: entry.data.thumbnail,
                            thumbnail_height: entry.data.thumbnail_height,
                            thumbnail_width: entry.data.thumbnail_width,
                            ups: entry.data.ups,
                            downs: entry.data.downs,
                            score: entry.data.score,
                            over_18: entry.data.over_18,
                        };
                        this.posts.push(post);
                    });
            });
        }
    },
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
