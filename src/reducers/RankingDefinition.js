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
      return {...state, rules: state.rules.concat(action.rule)}

    case 'DELETE_RULE':
      return {...state, rules: state.rules.filter(rule => rule.name !== action.ruleName)}

    case 'UPDATE_RULE': {
      let ruleIndex = state.rules.findIndex(rule => rule.name === action.ruleName);
      state.rules[ruleIndex] = action.details;

      return {...state}
    }

    default:
      return state;
  }
};
