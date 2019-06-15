export const includesOperator = function (ruleValues, value) {
  const matchingValues = ruleValues.find(ruleValue => value.includes(ruleValue));

  console.log('matchingValues', matchingValues, matchingValues ? 'SO, TRUE' : 'SO, FALSE');

  return typeof matchingValues !== 'undefined';
}