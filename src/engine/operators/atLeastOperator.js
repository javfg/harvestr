export const atLeastOperator = function (rule, relevantValues) {
  const hasAtLeast = relevantValues.length >= rule.values[0];

  console.log('hasAtLeast', hasAtLeast, hasAtLeast ? 'SO, TRUE' : 'SO, FALSE');

  return hasAtLeast;
}