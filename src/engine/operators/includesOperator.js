export const includesOperator = function (rule, relevantValues) {
  const matchingValues = rule.values.find(ruleValue => relevantValues.includes(ruleValue));
  const hasMatchingValues = typeof matchingValues !== 'undefined';

  console.log('matchingValues', matchingValues, matchingValues ? 'SO, TRUE' : 'SO, FALSE');

  return {
    score: hasMatchingValues ? rule.importance : 0,
    result: hasMatchingValues,
    textPositive: 'includes',
    textNegative: 'does not include',
    rank: undefined
  };
}