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
        rule.run(item, this.items);
      });
    });

    // Sort items.
    // TODO: sort method.

    progressBar.setCurrentProgress(progressBar.totalProgress);
    progressBar.done(true);

    return {items: this.items};
  }
}
