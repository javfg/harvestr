export const betweenOperator = function (rule, relevantValues) {
  const valuesBetween = relevantValues.filter(relevantValue => relevantValue > rule.values[0] && relevantValue < rule.values[1]);
  const hasValuesBetween = valuesBetween.length > 0;

  console.log('valuesBetween', valuesBetween, hasValuesBetween ? 'SO, TRUE' : 'SO, FALSE');

  return {
    score: hasValuesBetween ? rule.importance : 0,
    result: hasValuesBetween,
    textPositive: 'contains values between',
    textNegative: 'does not contain values between',
    rank: undefined
  };
}