export const atLeastOperator = function (ruleValues, value) {
  const hasAtLeast = value.length >= ruleValues[0];

  console.log('hasAtLeast', hasAtLeast, hasAtLeast ? 'SO, TRUE' : 'SO, FALSE');

  return hasAtLeast;
}