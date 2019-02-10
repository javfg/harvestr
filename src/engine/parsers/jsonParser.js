import { getField } from "../../utils/utils";


export const jsonParser = function (doc, fields) {
  try {
    const results = fields.map(f => {
      console.log('parsing', f, 'from', doc );
      getField(doc, f, undefined);
    });

    console.log('results', results);

    return results;
  } catch (e) {
    console.log('e', e);
  }
}
