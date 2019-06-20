//
// rankingDefinition actions.
//

// Set rankingDefinition.
export const setRankingDefinition = (rankingDefinition) => ({
  type: 'SET_RANKINGDEFINITION',
  rankingDefinition
});

// Add rule to ranking definition.
export const addRule = (rule) => ({
  type: 'ADD_RULE',
  rule
});

// Delete rule from ranking definition.
export const deleteRule = (ruleName) => ({
  type: 'DELETE_RULE',
  ruleName
});
