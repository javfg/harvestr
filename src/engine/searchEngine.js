// Models.
import Item from './model/Item';

// Utils.
import AsyncItemQueue from '../utils/AsyncQueue';
import { config } from '../config/Config';


//
// Search engine class.
//
//
export default class SearchEngine {
  constructor(itemList, searchProfile, rankingDefinition, config) {
    this.config = config;
    this.savedData = {};

    this.items = itemList.map(item => new Item(item, searchProfile, this.savedData));
  }


  run = async () => {
    const asyncItemQueue = new AsyncItemQueue(this.items, config.itemConcurrency);

    await asyncItemQueue.run();

    return this.items;
  }
}
