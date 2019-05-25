//
// HarvestPage actions.
//

// Set any field.
// Usage: setField({field1: value1, field2: value, ...})
export const setField = (newState) => {
  return {
    type: 'SET_HARVESTPAGESTATE',
    newState
  };
};
