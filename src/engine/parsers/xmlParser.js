import get from "lodash/get";
var convert = require("xml-js");

export const xmlParser = function(doc, fields, multiple) {
  try {
    const jsonDoc = JSON.parse(
      convert.xml2json(doc, { compact: true, ignoreComment: true })
    );

    const result = fields.map(f => {
      return JSON.stringify(get(jsonDoc, f, "EMPTY"));
    });

    return result;
  } catch (e) {
    console.log("e", e);
  }
};
