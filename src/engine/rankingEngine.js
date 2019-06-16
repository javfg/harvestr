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
    this.items.forEach(item => {
      console.log('-> RULE: starting item', item);
      item.rules.forEach(rule => {
        console.log('-> RULE: Starting rule', rule);
        rule.run(item, this.items);
      })
    })

    // Sort items.
    // TODO: sort method.

    progressBar.setCurrentProgress(progressBar.totalProgress);
    progressBar.done(true);

    return {items: this.items};
  }
}
