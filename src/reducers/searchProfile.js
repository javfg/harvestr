//
// Search Profile Reducer.
//
const searchProfileDefaultState = [];

export default (state = searchProfileDefaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCHPROFILE':
      return action.searchProfile;

    case 'ADD_QUERY':
      return state.push(action.query);

    case 'DELETE_QUERY':
      return state.filter(query => query.name !== action.queryName);

    case 'UPDATE_QUERY':
      return state.filter(query => query.name !== action.queryName).push(action.updatedQuery);

    case 'ADD_FIELD':
      return state;

    case 'DELETE_FIELD':
      return state;

    case 'UPDATE_FIELD':
      return state;

    case 'ADD_ENTRY':
      return state;

    case 'DELETE_ENTRY':
      return state;

    case 'UPDATE_ENTRY':
      return state;

    default:
      return state;
  }
};
