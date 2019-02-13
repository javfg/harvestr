import get from 'lodash/get';


export const jsonParser = function (doc, fields, multiple) {
  try {
    const result = fields.map(f => get(doc, f, 'EMPTY'));

    return multiple ? result : result[0];
  } catch (e) {
    console.log('e', e);
  }
}
