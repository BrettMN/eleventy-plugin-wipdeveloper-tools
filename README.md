# eleventy-plugin-wipdeveloper-tools

things I'm tired of copying and pasting between projects...

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
