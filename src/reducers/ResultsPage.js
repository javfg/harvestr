//
// Results Page Settings Reducer.
//
const ResultsPageDefaultState = {
  contractedQueries: []
};

export default (state = ResultsPageDefaultState, action) => {
  switch (action.type) {
    case 'SET_RESULTSPAGESTATE':
      return { ...state, ...action.newState };

    default:
      return state;
  }
};
