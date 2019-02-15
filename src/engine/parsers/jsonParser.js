import get from "lodash/get";

export const jsonParser = function(doc, field, multiple) {
  try {
    const result = get(doc, field.field, "EMPTY");

    return multiple ? result : result[0];
  } catch (e) {
    console.log("e", e);
  }
};
