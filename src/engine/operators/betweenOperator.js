// Config.
import { config } from '../../config/Config';


export const betweenOperator = function (rule, relevantValues, item) {
  const valuesBetween = relevantValues.filter(relevantValue => relevantValue > rule.values[0] && relevantValue < rule.values[1]);
  const hasValuesBetween = valuesBetween.length > 0;

  config.debugRankingEngine && console.log('valuesBetween', valuesBetween, hasValuesBetween ? 'SO, TRUE' : 'SO, FALSE');

  return {
    item: item.name,
    field: rule.field,
    result: hasValuesBetween,
    rule: rule.name,
    score: hasValuesBetween ? rule.importance : 0,
    textPositive: 'contains values between',
    textNegative: 'does not contain values between',
    values: rule.values
  };
}