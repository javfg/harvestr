//
// Progress Bar Reducer.
//
const progressBarDefaultState = {
  currentMessage: '',
  currentProgress: 0,
};

export default (state = progressBarDefaultState, action) => {
  switch (action.type) {
    case 'SET_PROGRESSBAR':
      return {...state, ...action.newState};

    default:
      return state;
  }
};
