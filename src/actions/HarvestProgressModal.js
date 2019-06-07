//
// ProgressBar actions.
//

// Set any field.
// Usage: setHarvestProgressModalField({field1: value1, field2: value, ...})
export const setHarvestProgressModalField = (newState) => ({
  type: 'SET_HARVESTPROGRESSMODAL',
  newState
});
