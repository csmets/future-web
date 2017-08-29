import homeMeta from '../../metadata/page/home.js';
import homeTemplate from '../../template/home.js';

const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
};

const json = (response) => {
    return response.json();
};

const posts = (json) => {
    const entries = json.data.children;
    let posts = [];

    entries.forEach((entry) => {

        let thumbnail = entry.data.thumbnail;

        if (entry.data.over_18 === true)
            thumbnail = '/images/over18.png';

        const post = {
            author: entry.data.author,
            domain: entry.data.domain,
            downs: entry.data.downs,
            over_18: entry.data.over_18,
            score: entry.data.score,
            thumbnail: thumbnail,
            title: entry.data.title,
            permalink: `https://www.reddit.com${entry.data.permalink}`,
            post_hint: entry.data.post_hint,
            ups: entry.data.ups,
        };
        posts.push(post);
    });

    // Remove reddit sticky post
    posts.shift();

    return posts;
};

const home = {
    template: homeTemplate,
    data: () => homeMeta,
    created: function() {
        this.loadReddit();
    },
    methods: {
        loadReddit: function() {
            fetch('https://www.reddit.com/r/funny.json')
                .then(status)
                .then(json)
                .then(posts)
                .then((data) => this.posts = data);
        },
    },
};

export { home as default };
