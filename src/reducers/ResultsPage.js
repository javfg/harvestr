//
// Results Page Settings Reducer.
//
const ResultsPageDefaultState = {
  contractedQueries: [],
  totalPages: 0,
  currentPage: 0,
  pageSize: 10,
  stats: {items: 0, queries: 0, fields: 0, entries: 0, values: 0}
};

export default (state = ResultsPageDefaultState, action) => {
  switch (action.type) {
    case 'SET_RESULTSPAGESTATE':
      return { ...state, ...action.newState };

    default:
      return state;
  }
};
