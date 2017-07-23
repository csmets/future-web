/*
 * Home template
 */

const page = `
<div>
<h1>{{ title }}</h1>

<div v-html="contents"></div>
</div>`;

export { page as default };
