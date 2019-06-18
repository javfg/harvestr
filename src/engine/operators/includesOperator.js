export const includesOperator = function (rule, relevantValues, item) {
  const matchingValues = rule.values.find(ruleValue => relevantValues.includes(ruleValue));
  const hasMatchingValues = typeof matchingValues !== 'undefined';

  console.log('matchingValues', matchingValues, matchingValues ? 'SO, TRUE' : 'SO, FALSE');

  return {
    item: item.name,
    field: rule.field,
    result: hasMatchingValues,
    rule: rule.name,
    score: hasMatchingValues ? rule.importance : 0,
    textPositive: 'includes',
    textNegative: 'does not include',
    values: rule.values
  };
}
