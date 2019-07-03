// Config.
import { config } from '../config/Config';


//
// Ranking engine class.
//
//
export default class RankingEngine {
  constructor(items, rankingDefinition, config) {
    this.config = config;
    this.items = items;
    this.rankingDefinition = rankingDefinition;
  }


  run = async (progressBar) => {
    if (progressBar) {
      progressBar.setCurrentMessage('Computing rankings and sorting...');
    }

    config.debugRankingEngine && console.log('RANKINGENGINE -> this', this);

    // Compute rankings for every item.
    this.items.forEach((item, index) => {
      config.debugRankingEngine && console.log('-> ITEM: Starting item', index, item, this.items);
      item.rules.forEach((rule, index) => {
        config.debugRankingEngine && console.log('-> RULE: Starting rule', index, rule);
        const ruleResult = rule.run(item, this.items);

        item.score += parseFloat(ruleResult.score);
        item.explanations.push(ruleResult);
      });

      config.debugRankingEngine && console.log('item.score', item.score);
      config.debugRankingEngine && console.log('item.explanations', item.explanations);
    });

    // Sort items.
    this.items.sort((itemA, itemB) => itemB.score - itemA.score);

    if (progressBar) {
      progressBar.setCurrentProgress(progressBar.totalProgress);
      progressBar.stopCounter();
      progressBar.done(true);
    }

    return {items: this.items};
  }
}
