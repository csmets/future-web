import homeMeta from '../../metadata/page/home.js';
import homeTemplate from '../../template/home.js';

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
                        this.posts.push(post);
                    });

                    // Remove reddit sticky post
                    this.posts.shift();
            });
        }
    },
};

export { home as default };
