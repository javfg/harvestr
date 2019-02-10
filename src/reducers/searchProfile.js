// Search Profile Reducer

const searchProfileDefaultState = [];

export default (state = searchProfileDefaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCHPROFILE':
      return action.searchProfile;

    default:
      return state;
  }
};
