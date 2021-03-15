const stripHtml = require('./src/stripHtml');

module.exports = function (eleventyConfig, options) {
  eleventyConfig.addFilter(
    `${options.namespace ? options.namespace : ''}stripHtml`,
    stripHtml
  );
};
