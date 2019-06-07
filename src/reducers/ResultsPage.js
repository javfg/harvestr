//
// Results Page Settings Reducer.
//
const ResultsPageDefaultState = {
  contractedQueries: [],
  currentPage: 0,
  loadResultsModalVisible: false,
  pageSize: 10,
  totalPages: 0
};

export default (state = ResultsPageDefaultState, action) => {
  switch (action.type) {
    case 'SET_RESULTSPAGESTATE':
      return { ...state, ...action.newState };

    default:
      return state;
  }
};
