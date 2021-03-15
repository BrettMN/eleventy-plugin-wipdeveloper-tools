const stripHtml = require('./src/stripHtml');

module.exports = function (eleventyConfig, options) {
  eleventyConfig.addFilter(`stripHtml`, stripHtml);
};
