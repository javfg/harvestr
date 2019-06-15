export const betweenOperator = function (ruleValues, value) {
  const valuesBetween = value.filter(value => value > ruleValues[0] && value < ruleValues[1]);

  console.log('valuesBetween', valuesBetween, valuesBetween.length > 0 ? 'SO, TRUE' : 'SO, FALSE');

  return valuesBetween.length > 0;
}