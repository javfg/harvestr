//
// Ranking Definition Reducer.
//
const rankingDefinitionDefaultState = {
  rules: []
};

export default (state = rankingDefinitionDefaultState, action) => {
  switch (action.type) {
    case 'SET_RANKINGDEFINITION':
      return action.rankingDefinition;

    default:
      return state;
  }
};
