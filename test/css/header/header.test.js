const tape = require('tape');
const test = require('tape-css')(tape);
const h = require('hyperscript');
const style = require('computed-style');

const css = require('../../../src/css/main.css');

const header = h('header',
    h('div .logo-container', h('h1 .logo', 'Site Name')),
    h('nav', {role: "main"},
        h('ul',
            h('li', h('a', {href: "#"}, 'Link 1')),
            h('li', h('a', {href: "#"}, 'Link 2')),
            h('li', h('a', {href: "#"}, 'Link 3')))));

test('Header', {
    dom: header,
    styles: css,
}, (is) => {
    is.equal(
        style(header, 'top'),
        '0px',
        'is position at top');
});
