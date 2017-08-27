const posts = fetch('https://www.reddit.com/r/funny.json')
    .then(res => {
        document.getElementById('response').innerHtml = res;
    });

export { posts as default };
