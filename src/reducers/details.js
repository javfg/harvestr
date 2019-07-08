//
// Harvest Details Reducer.
//
const detailsDefaultState = {
  name: 'myHarvest',
  creationDate: undefined,
  description: 'Empty',
  stats: {items: 0, queries: 0, fields: 0, entries: 0, values: 0}
};

export default (state = detailsDefaultState, action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      return { ...state, ...action.newState };

    default:
      return state;
  }
};
