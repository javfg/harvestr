import get from "lodash/get";
var convert = require("xml-js");

export const xmlParser = function(doc, field, multiple) {
  try {
    const jsonDoc = JSON.parse(
      convert.xml2json(doc, { compact: true, ignoreComment: true })
    );

    let data = get(jsonDoc, field.field) || [];

    // Parser options:
    // ALWAYS FIRST: OR field.
    if (data.length === 0 && field.or) {
      data = get(jsonDoc, field.or);
    }

    // Text type field.
    if (field.type === "text") {
      // Get text.

      // TODO TEXT SHOULD BE IN SEARCHPROFILE
      if (Array.isArray(data)) {
        data = data.map(e => e._text);
      } else if (typeof data === "object") {
        if (data._text) {
          data = data._text;
        } else {
          data = Object.keys(data).map(k => data[k]._text);
        }
      } else {
        data = data._text;
      }

      // Remove newlines.
      if (field.removeNewLines) {
        data = data.replace(/\r?\n|\r/g, "");
      }

      // Single/multiple.
      if (Array.isArray(data) && field.multiple === false) {
        data = data[0];
      }

      // Link to in arrays.
      if (field.linkTo) {
        console.log("data in linkto", data);

        data = data.map(e => [e, `${field.linkTo}${e}`]);
      }

      console.log("data", data);
    }

    // dbReference type field.
    if (field.type === "object") {
      // Has attribute: drop elements without.
      if (field.mustInclude) {
        data = data.filter(d => JSON.stringify(d).includes(field.mustInclude));
      }

      // Fetch only given fields.
      if (field.getFields) {
        data = data.map(d =>
          field.getFields.map(f => {
            let res = [];

            const value = get(d, f.field);
            value ? res.push(value) : null;

            // ALWAYS FIRST: AND field.
            if (f.and) {
              const andValue = get(d, f.and);
              andValue ? res.push(andValue) : null;
            }

            // ALWAYS FIRST: OR field.
            if (res.length === 0 && f.or) {
              res = get(d, f.or);
            }

            // Delete leading chars.
            if (f.deleteLeadingChars) {
              res[0] = res[0].slice(f.deleteLeadingChars);
            }

            // Subfield linkto.
            if (f.linkTo && res[0]) {
              res.push(`${f.linkTo}${res[0]}`);
            }

            return res;
          })
        );
      }

      // Link to in arrays.
      if (field.linkTo && data[0]) {
        data.push(`${field.linkTo}${data[0]}`);
      }
    }

    return data.length === 0 ? "EMPTY" : data;
  } catch (e) {
    console.log("e", e);
  }
};
