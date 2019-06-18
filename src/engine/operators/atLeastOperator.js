export const atLeastOperator = function (rule, relevantValues) {
  const hasAtLeast = relevantValues.length >= rule.values[0];

  console.log('hasAtLeast', hasAtLeast, hasAtLeast ? 'SO, TRUE' : 'SO, FALSE');

  return {
    score: hasAtLeast ? rule.importance : 0,
    result: hasAtLeast,
    textPositive: 'contains at least',
    textNegative: 'does not contain at least',
    rank: undefined
  };
}