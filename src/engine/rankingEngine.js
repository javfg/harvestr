// Models.
import Item from './model/Item';

// Utils.
import { config } from '../config/Config';


//
// Ranking engine class.
//
//
export default class RankingEngine {
  constructor(itemList, searchProfile, rankingDefinition, config) {
    this.config = config;
    this.savedData = {};
    this.stats = {items: 0, queries: 0, fields: 0, entries: 0, values: 0};

    this.items = itemList.map(item => new Item(item, searchProfile, this.savedData));
  }


  calculateStats = () => {
    this.items.forEach(item => {
      this.stats.items++;
      item.queries.forEach(query => {
        this.stats.queries++;
        query.fields.forEach(field => {
          this.stats.fields++;
          field.entries.forEach(entry => {
            this.stats.entries++;
            this.stats.values += entry.value.length;
          });
        });
      });
    });
  }


  run = async (progressBar) => {
    progressBar.setCurrentMessage('Computing rankings and sorting...');

    // Compute rankings for every item.
    /* TODO:
        1. for every item:
          1.1. for every ranking rule:
            1.1.1. get relevant entry values.
            1.1.2. get relevant operator, value and importance from rule.
            1.1.3. compute operation with entry values and rule values.
            1.1.4. accumulate score and store explanation.
     */

    // Sort items.
    // TODO: sort method.

    progressBar.setCurrentProgress(progressBar.totalProgress);
    progressBar.done(true);

    return {items: this.items, stats: this.stats};
  }
}
