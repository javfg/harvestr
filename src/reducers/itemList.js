// Item List Profile Reducer

const ItemListDefaultState = [];

export default (state = ItemListDefaultState, action) => {
  switch (action.type) {
    case 'SET_ITEMLIST':
      return action.itemList;

    default:
      return state;
  }
};
