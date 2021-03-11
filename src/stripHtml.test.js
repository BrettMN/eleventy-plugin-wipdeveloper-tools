const test = require('ava');

const stripHtml = require('./stripHtml');

const start = '<div><p><em>test</em> thing</p> <h1>Here!</h1></div>';
const results = 'test thing Here!';

test('String should not have tags', (t) => {
  t.is(results, stripHtml(start));
});

test('String should be untouched', (t) => {
  t.is(results, stripHtml(results));
});
