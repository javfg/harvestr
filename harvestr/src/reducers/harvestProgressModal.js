//
// Progress Bar Reducer.
//
const harvestProgressModalDefaultState = {
  currentMessage: '',
  currentItems: [],
  currentProgress: 0,
  elapsedTime: 0,
  harvestDone: false,
  visible: false
};

export default (state = harvestProgressModalDefaultState, action) => {
  switch (action.type) {
    case 'SET_HARVESTPROGRESSMODAL':
      return {...state, ...action.newState};

    default:
      return state;
  }
};
