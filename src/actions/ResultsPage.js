//
// ResultsPage actions.
//

// Set any field.
// Usage: setResultsPageField({field1: value1, field2: value, ...})
export const setResultsPageField = (newState) => {
  return {
    type: 'SET_RESULTSPAGESTATE',
    newState
  };
};
