//
// Search Results Reducer.
//
const searchResultsDefaultState = [];

export default (state = searchResultsDefaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCHRESULTS':
      return action.searchResults;

    default:
      return state;
  }
};
