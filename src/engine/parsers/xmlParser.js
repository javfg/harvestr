var convert = require('xml-js');


export const xmlParser = function (doc) {
  try {
    return convert.xml2json(doc, {compact: true, ignoreComment: true});
  } catch (e) {
    console.log('e', e);
  }
}