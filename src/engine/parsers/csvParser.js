export const csvParser = function(doc) {
  try {
    return doc.length === 0 ? "EMPTY" : doc;
  } catch (e) {
    console.log("e", e);
  }
};
