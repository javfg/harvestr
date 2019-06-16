export const betweenOperator = function (rule, relevantValues) {
  const valuesBetween = relevantValues.filter(relevantValue => relevantValue > rule.values[0] && relevantValue < rule.values[1]);

  console.log('valuesBetween', valuesBetween, valuesBetween.length > 0 ? 'SO, TRUE' : 'SO, FALSE');

  return valuesBetween.length > 0;
}