export const htmlParser = function(doc, field, multiple) {
  try {
    return doc
      .split(field.searchString)[1]
      .split(`<${field.betweenTags}`)[1]
      .split(`>`)[1]
      .split(`</${field.betweenTags}`)[0];
  } catch (e) {
    console.log("e", e);
  }
};
