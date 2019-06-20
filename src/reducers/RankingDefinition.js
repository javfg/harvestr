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

    case 'ADD_RULE':
      return {...state, rules: state.rules.push(action.rule)}

    case 'DELETE_RULE':
      return {...state, rules: state.rules.filter(rule => !rule.name === action.ruleName)}

    default:
      return state;
  }
};
