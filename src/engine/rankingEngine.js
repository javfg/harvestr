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
      item.rules.forEach(rule => {
        rule.compute(item);
      })
    })

    // Sort items.
    // TODO: sort method.

    progressBar.setCurrentProgress(progressBar.totalProgress);
    progressBar.done(true);

    return {items: this.items};
  }
}
