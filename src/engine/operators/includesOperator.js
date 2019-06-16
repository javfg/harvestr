export const includesOperator = function (rule, relevantValues) {
  const matchingValues = rule.values.find(ruleValue => relevantValues.includes(ruleValue));

  console.log('matchingValues', matchingValues, matchingValues ? 'SO, TRUE' : 'SO, FALSE');

  return typeof matchingValues !== 'undefined';
}