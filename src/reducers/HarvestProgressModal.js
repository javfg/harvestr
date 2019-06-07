//
// Progress Bar Reducer.
//
const harvestProgressModalDefaultState = {
  visible: false,
  harvestDone: false,
  currentMessage: '',
  currentItems: [],
  currentProgress: 0,
};

export default (state = harvestProgressModalDefaultState, action) => {
  switch (action.type) {
    case 'SET_HARVESTPROGRESSMODAL':
      return {...state, ...action.newState};

    default:
      return state;
  }
};
