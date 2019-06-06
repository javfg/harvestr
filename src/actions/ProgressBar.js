//
// ProgressBar actions.
//

// Set any field.
// Usage: setProgresBarField({field1: value1, field2: value, ...})
export const setProgressBarField = (newState) => ({
  type: 'SET_PROGRESSBAR',
  newState
});
