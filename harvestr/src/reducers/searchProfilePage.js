//
// Results Page Settings Reducer.
//
const searchProfilePageDefaultState = {
};

export default (state = searchProfilePageDefaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCHPROFILEPAGESTATE':
      return { ...state, ...action.newState };

    default:
      return state;
  }
};