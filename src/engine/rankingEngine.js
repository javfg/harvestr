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
    progressBar.setCurrentMessage('Computing rankings and sorting...');

    console.log('RANKINGENGINE -> this', this);

    // Compute rankings for every item.
    this.items.forEach((item, index) => {
      console.log('-> ITEM: Starting item', index, item, this.items);
      item.rules.forEach((rule, index) => {
        console.log('-> RULE: Starting rule', index, rule);
        const ruleResult = rule.run(item, this.items);

        item.score += ruleResult.score;
        item.explanations.push(ruleResult);
      });

      console.log('item.score', item.score);
      console.log('item.explanations', item.explanations);
    });

    // Sort items.
    this.items.sort((itemA, itemB) => itemB.score - itemA.score);

    progressBar.setCurrentProgress(progressBar.totalProgress);
    progressBar.stopCounter();
    progressBar.done(true);
    console.log('progressBar', progressBar);

    return {items: this.items};
  }
}
