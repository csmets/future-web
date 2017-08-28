/*
 * Homepage template
 */

const date = new Date();
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const month = months[date.getMonth()];
const day = (int) => {
    const t = int % 10;
    if (t == 1) {
        return int + '<sup>st</sup>';
    }
    if (t == 2) {
        return int + '<sup>nd</sup>';
    }
    if (t == 3) {
        return int + '<sup>rd</sup>';
    }
    return int + '<sup>th</sup>';
};

const todayDate = `${month} ${day(date.getDate())}`;

Vue.component('reddit-post', {
    props: [
        'title',
        'score',
        'thumbnail',
        'link',
        'domain',
        'author',
        'hint',
    ],
    template: `
<a class="post-link" v-bind:href="link">
<article class="post">
    <div class="score">{{ score }}</div>
    <img class="thumbnail" v-bind:src="thumbnail" alt="">
    <div class="post-content">
        <h1>{{ title }}</h1>
        <h2>{{ domain }}</h2>
        <h3>posted by {{ author }}</h3>
    </div>
    <div class="post-category"><span class="filter">{{ hint }}</span></div>
</article>
</a>`,

});

const homepage = `
<div>
<h1>Today <span>${todayDate}</span></h1>
<div v-for="post in posts">
    <reddit-post
        :title="post.title"
        :score="post.score"
        :thumbnail="post.thumbnail"
        :link="post.permalink"
        :domain="post.domain"
        :author="post.author"
        :hint="post.post_hint"
    ></reddit-post>
</div>
</div>`;

export { homepage as default };
