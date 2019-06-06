//
// Results Page Settings Reducer.
//
const ResultsPageDefaultState = {
  contractedQueries: [],
  harvestDone: false,
  totalPages: 0,
  currentPage: 0,
  pageSize: 10
};

export default (state = ResultsPageDefaultState, action) => {
  switch (action.type) {
    case 'SET_RESULTSPAGESTATE':
      return { ...state, ...action.newState };

    default:
      return state;
  }
};
