//
// HarvestPage actions.
//

// Set any field.
// Usage: setHarvestPageField({field1: value1, field2: value, ...})
export const setHarvestPageField = (newState) => {
  return {
    type: 'SET_HARVESTPAGESTATE',
    newState
  };
};
