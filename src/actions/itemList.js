/* Action generators:
  1. Component calls action generator.
  2. Action generator returns function.
  3. Component dispatches function.
  4. Function runs (dispatch objects, redux store update).
*/


//
// itemList actions.
//

// Set itemList.
export const setItemList = (itemList) => {
  return {
    type: 'SET_ITEMLIST',
    itemList
  };
};
