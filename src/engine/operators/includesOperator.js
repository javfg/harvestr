// Config.
import { config } from '../../config/Config';


export const includesOperator = function (rule, relevantValues, item) {
  const matchingValues = rule.values.find(ruleValue => relevantValues.includes(ruleValue));
  const partialMatchingValues = rule.values.find(ruleValue => {
    const partialMatches = relevantValues.map(relevantValue => relevantValue.includes(ruleValue));
    return partialMatches.includes(true);
  });
  const hasMatchingValues = typeof matchingValues !== 'undefined';
  const hasPartialMatchingValues = typeof partialMatchingValues !== 'undefined';

  config.debugRankingEngine && console.log('matchingValues', matchingValues, matchingValues ? 'SO, TRUE' : 'SO, FALSE');

  let score = hasMatchingValues ? rule.importance : 0;

  if (!rule.parameters.exact && score === 0) {
    score = hasPartialMatchingValues ? rule.importance * .5 : 0;
  }

  return {
    item: item.name,
    field: rule.field,
    result: hasMatchingValues || hasPartialMatchingValues,
    rule: rule.name,
    score,
    textPositive: 'includes',
    textNegative: 'does not include',
    values: rule.values
  };
}
