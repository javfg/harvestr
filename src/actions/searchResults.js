/* Action generators:
  1. Component calls action generator.
  2. Action generator returns function.
  3. Component dispatches function.
  4. Function runs (dispatch objects, redux store update).
*/


//
// searchResults actions.
//

// Set searchResults.
export const setSearchResults = (searchResults) => {
  return {
    type: 'SET_SEARCHRESULTS',
    searchResults
  };
};
