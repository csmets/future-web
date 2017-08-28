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
                            author: entry.data.author,
                            domain: entry.data.domain,
                            downs: entry.data.downs,
                            over_18: entry.data.over_18,
                            score: entry.data.score,
                            thumbnail: entry.data.thumbnail,
                            title: entry.data.title,
                            permalink: `https://www.reddit.com${entry.data.permalink}`,
                            post_hint: entry.data.post_hint,
                            ups: entry.data.ups,
                        };
                        this.posts.push(post);
                    });

                    // Remove reddit sticky post
                    this.posts.shift();
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
