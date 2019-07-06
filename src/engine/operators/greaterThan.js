// Config.
import { config } from '../../config/Config';


export const greaterThanOperator = function (rule, relevantValues, item) {
  const valuesGreaterThan = relevantValues.filter(relevantValue => relevantValue > rule.values[0]).length;
  const proportionOfValuesGreaterThan = valuesGreaterThan / relevantValues.length;

  config.debugRankingEngine && console.log('GT', valuesGreaterThan, '/', relevantValues, '=', proportionOfValuesGreaterThan, 'score', rule.importance * proportionOfValuesGreaterThan);

  return {
    item: item.name,
    field: rule.field,
    result: valuesGreaterThan > 0,
    rule: rule.name,
    score: rule.importance * proportionOfValuesGreaterThan,
    textPositive: 'contains values greater than',
    textNegative: 'does not contain values greater than',
    values: rule.values
  };
}