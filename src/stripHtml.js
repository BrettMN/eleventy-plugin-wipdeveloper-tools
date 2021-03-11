module.exports = (html) => {
  if (html) {
    return html.replace(/(<([^>]+)>)/gi, '');
  }
};
