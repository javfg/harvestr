//
// Results Page Settings Reducer.
//
const resultsPageDefaultState = {
  contractedQueries: [],
  currentPage: 0,
  loadResultsModalVisible: false,
  pageSize: 10,
  totalPages: 0
};

export default (state = resultsPageDefaultState, action) => {
  switch (action.type) {
    case 'SET_RESULTSPAGESTATE':
      return { ...state, ...action.newState };

    default:
      return state;
  }
};
