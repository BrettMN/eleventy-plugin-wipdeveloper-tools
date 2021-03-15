# eleventy-plugin-wipdeveloper-tools

things I'm tired of copying and pasting between projects...

## Options 

Pass a namespace into options via the `namespace` property.

```js
const tools = require('eleventy-plugin-wipdeveloper-tools');

module.exports = function ( eleventyConfig, {}) {
  eleventyConfig.addPlugin(tools, { namespace: 'exampleNamespace' });
};
```

## Filter~~s~~

### `stripHtml`

Universal filter to remove html tags from text.

#### Examples

```liquid
{{ content | stripHtml }}
```

```nunjucks
{{ content | stripHtml }}
```

```11ty.js
module.exports = function({content}) {
  return `${this.stripHtml(content)}`;
};
```
