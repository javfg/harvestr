/* Action generators:
  1. Component calls action generator.
  2. Action generator returns function.
  3. Component dispatches function.
  4. Function runs (dispatch objects, redux store update).
*/


//
// searchProfile actions.
//

// Set searchProfile.
export const setSearchProfile = (searchProfile) => {
  return {
    type: 'SET_SEARCHPROFILE',
    searchProfile
  };
};
