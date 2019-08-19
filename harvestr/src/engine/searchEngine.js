// Models.
import Item from './model/Item';

// Utils.
import AsyncItemQueue from './model/AsyncQueue';
import { config } from '../config/Config';


//
// Search engine class.
//
//
export default class SearchEngine {
  constructor(itemList, searchProfile, rankingDefinition, config) {
    this.config = config;
    this.savedData = {};
    this.stats = {items: 0, queries: 0, fields: 0, entries: 0, values: 0};

    this.items = itemList.map(item => new Item(item, searchProfile, rankingDefinition.rules, this.savedData));
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
    const asyncItemQueue = new AsyncItemQueue(this.items, config.itemConcurrency, progressBar);

    progressBar.setCurrentProgress(0);
    progressBar.startCounter();
    progressBar.show();
    progressBar.done(false);
    progressBar.setCurrentMessage('Starting...');

    // Run the harvest.
    await asyncItemQueue.run();

    // Calculate harvest stats.
    progressBar.setCurrentMessage('Calculating stats...');

    this.calculateStats();

    return {items: this.items, stats: this.stats};
  }
}
