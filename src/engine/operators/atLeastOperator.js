// Config.
import { config } from '../../config/Config';


export const atLeastOperator = function (rule, relevantValues, item) {
  const hasAtLeast = relevantValues.length >= rule.values[0];

  config.debugSearchEngine && console.log('hasAtLeast', hasAtLeast, hasAtLeast ? 'SO, TRUE' : 'SO, FALSE');

  return {
    item: item.name,
    field: rule.field,
    result: hasAtLeast,
    rule: rule.name,
    score: hasAtLeast ? rule.importance : 0,
    textPositive: 'contains at least',
    textNegative: 'does not contain at least',
    values: rule.values
  };
}