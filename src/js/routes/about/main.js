import pageTemplate from '../../template/page.js';
import aboutMeta from '../../metadata/page/about.js';

const about = {
    template: pageTemplate,
    data: () => aboutMeta,
};

export { about as default };
