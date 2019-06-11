export const htmlParser = function(doc, field) {
  field.entries.map(entry => {
    try {
      entry.value = [doc
      .split(entry.path.searchString)[1]
      .split(`<${entry.path.betweenTags}`)[1]
      .split(`>`)[1]
      .split(`</${entry.path.betweenTags}`)[0]];
    // eslint-disable-next-line no-empty
    } catch {}
  });
};
